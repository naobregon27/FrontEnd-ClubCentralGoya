import { motion } from 'framer-motion';
import { User, CreditCard, Gift, Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';

const SociosDashboard = () => {
  const { currentSocio, cuotas } = useAppSelector((state) => state.socios);

  if (!currentSocio) {
    return (
      <div className="min-h-screen bg-club-black py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-club-gray-400 mb-4">No hay sesión activa</p>
          <Link to="/socios/login" className="btn-primary">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  const cuotasPagadas = cuotas.filter((c) => c.estado === 'pagada').length;
  const cuotasVencidas = cuotas.filter((c) => c.estado === 'vencida').length;
  const cuotasPendientes = cuotas.filter((c) => c.estado === 'pendiente').length;
  const totalCuotas = cuotas.length;
  const montoAdeudado = cuotas
    .filter((c) => c.estado === 'vencida' || c.estado === 'pendiente')
    .reduce((sum, c) => sum + c.monto, 0);

  const estaAlDia = cuotasVencidas === 0 && cuotasPendientes === 0;

  const handleDownloadCarnet = () => {
    if (currentSocio.carnetImagen) {
      const link = document.createElement('a');
      link.href = currentSocio.carnetImagen;
      link.download = `carnet-${currentSocio.numeroSocio}-${currentSocio.nombre}-${currentSocio.apellido}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'pagada':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'vencida':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-club-gold-500" />;
    }
  };

  const getEstadoLabel = (estado: string) => {
    switch (estado) {
      case 'pagada':
        return 'Pagada';
      case 'vencida':
        return 'Vencida';
      default:
        return 'Pendiente';
    }
  };

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Mi Cuenta</h1>
          <p className="section-subtitle">Bienvenido, {currentSocio.nombre} {currentSocio.apellido}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal - Información de Cuotas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Estado General */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-club-gold-500" />
                Estado de Cuotas
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-club-gray-800 rounded-lg">
                  <p className="text-club-gray-400 text-sm mb-1">Total Cuotas</p>
                  <p className="text-2xl font-bold text-club-white">{totalCuotas}</p>
                </div>
                <div className="text-center p-4 bg-club-gray-800 rounded-lg">
                  <p className="text-club-gray-400 text-sm mb-1">Pagadas</p>
                  <p className="text-2xl font-bold text-green-400">{cuotasPagadas}</p>
                </div>
                <div className="text-center p-4 bg-club-gray-800 rounded-lg">
                  <p className="text-club-gray-400 text-sm mb-1">Vencidas</p>
                  <p className="text-2xl font-bold text-red-400">{cuotasVencidas}</p>
                </div>
                <div className="text-center p-4 bg-club-gray-800 rounded-lg">
                  <p className="text-club-gray-400 text-sm mb-1">Pendientes</p>
                  <p className="text-2xl font-bold text-club-gold-500">{cuotasPendientes}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-club-gray-800 to-club-gray-900 rounded-lg border border-club-gray-700">
                <div>
                  <p className="text-club-gray-400 text-sm mb-1">Monto Adeudado</p>
                  <p className="text-3xl font-bold text-club-white">
                    ${montoAdeudado.toLocaleString('es-AR')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-club-gray-400 text-sm mb-1">Estado</p>
                  <p className={`text-xl font-bold ${estaAlDia ? 'text-green-400' : 'text-red-400'}`}>
                    {estaAlDia ? 'Al Día' : 'Pendiente de Pago'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Historial de Cuotas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-club-white mb-6">Historial de Cuotas</h2>
              <div className="space-y-3">
                {cuotas.length > 0 ? (
                  cuotas.map((cuota, index) => (
                    <motion.div
                      key={cuota.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 bg-club-gray-800 rounded-lg hover:bg-club-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        {getEstadoIcon(cuota.estado)}
                        <div>
                          <p className="text-club-white font-semibold">
                            {cuota.mes} {cuota.año}
                          </p>
                          <p className="text-club-gray-400 text-sm">
                            Vencimiento: {new Date(cuota.fechaVencimiento).toLocaleDateString('es-AR')}
                            {cuota.fechaPago && (
                              <> • Pagado: {new Date(cuota.fechaPago).toLocaleDateString('es-AR')}</>
                            )}
                          </p>
                          {cuota.metodoPago && (
                            <p className="text-club-gray-500 text-xs mt-1">
                              Método: {cuota.metodoPago}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-club-white font-bold text-lg">
                          ${cuota.monto.toLocaleString('es-AR')}
                        </p>
                        <p className={`text-sm font-semibold ${
                          cuota.estado === 'pagada' ? 'text-green-400' :
                          cuota.estado === 'vencida' ? 'text-red-400' :
                          'text-club-gold-500'
                        }`}>
                          {getEstadoLabel(cuota.estado)}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-club-gray-400 text-center py-8">No hay cuotas registradas</p>
                )}
              </div>
            </motion.div>

            {/* Datos Personales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-2 text-club-gold-500" />
                Datos Personales
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-club-gray-800 rounded-lg">
                  <span className="text-club-gray-400">Número de Socio</span>
                  <span className="text-club-white font-semibold">{currentSocio.numeroSocio}</span>
                </div>
                <div className="flex justify-between p-3 bg-club-gray-800 rounded-lg">
                  <span className="text-club-gray-400">Nombre Completo</span>
                  <span className="text-club-white font-semibold">
                    {currentSocio.nombre} {currentSocio.apellido}
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-club-gray-800 rounded-lg">
                  <span className="text-club-gray-400">Email</span>
                  <span className="text-club-white font-semibold">{currentSocio.email}</span>
                </div>
                <div className="flex justify-between p-3 bg-club-gray-800 rounded-lg">
                  <span className="text-club-gray-400">Fecha de Ingreso</span>
                  <span className="text-club-white font-semibold">
                    {new Date(currentSocio.fechaIngreso).toLocaleDateString('es-AR')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Beneficios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
                <Gift className="w-6 h-6 mr-2 text-club-gold-500" />
                Beneficios
              </h2>
              <ul className="space-y-3">
                {currentSocio.beneficios.map((beneficio, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 bg-club-gray-800 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-club-gold-500 rounded-full mr-3"></span>
                    <span className="text-club-white">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Columna Lateral - Carnet */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card sticky top-24"
            >
              <h2 className="text-2xl font-bold text-club-white mb-6 text-center">
                Carnet de Socio
              </h2>
              
              {currentSocio.carnetImagen ? (
                <div className="space-y-4">
                  <div className="relative bg-club-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={currentSocio.carnetImagen}
                      alt={`Carnet de ${currentSocio.nombre} ${currentSocio.apellido}`}
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <button
                    onClick={handleDownloadCarnet}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Descargar Carnet</span>
                  </button>
                  
                  <div className="p-4 bg-club-gray-800 rounded-lg text-center">
                    <p className="text-club-gray-400 text-sm mb-1">Socio N°</p>
                    <p className="text-2xl font-bold text-club-gold-500">
                      {currentSocio.numeroSocio}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <User className="w-16 h-16 text-club-gray-600 mx-auto mb-4" />
                  <p className="text-club-gray-400">
                    Carnet no disponible
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SociosDashboard;
