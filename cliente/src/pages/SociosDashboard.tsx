import { motion } from 'framer-motion';
import { User, CreditCard, Gift, QrCode } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';

const SociosDashboard = () => {
  const { currentSocio } = useAppSelector((state) => state.socios);

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

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Mi Cuenta</h1>
          <p className="section-subtitle">Bienvenido, {currentSocio.nombre}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <User className="w-12 h-12 text-club-gold-500 mb-4" />
            <h3 className="text-xl font-semibold text-club-white mb-2">Datos Personales</h3>
            <p className="text-club-gray-400 text-sm mb-4">
              Socio N° {currentSocio.numeroSocio}
            </p>
            <p className="text-club-gray-300">
              {currentSocio.nombre} {currentSocio.apellido}
            </p>
            <p className="text-club-gray-400 text-sm">{currentSocio.email}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <CreditCard className="w-12 h-12 text-club-gold-500 mb-4" />
            <h3 className="text-xl font-semibold text-club-white mb-2">Estado de Cuota</h3>
            <p className={`text-lg font-semibold mb-2 ${
              currentSocio.estadoCuota === 'alDia' ? 'text-green-400' : 'text-red-400'
            }`}>
              {currentSocio.estadoCuota === 'alDia' ? 'Al Día' : 'Vencida'}
            </p>
            <Link to="/cuota-social" className="text-club-gold-500 hover:text-club-gold-400 text-sm font-semibold">
              Ver detalles →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <Gift className="w-12 h-12 text-club-gold-500 mb-4" />
            <h3 className="text-xl font-semibold text-club-white mb-2">Beneficios</h3>
            <ul className="space-y-2">
              {currentSocio.beneficios.map((beneficio, index) => (
                <li key={index} className="text-club-gray-300 text-sm flex items-center">
                  <span className="w-2 h-2 bg-club-gold-500 rounded-full mr-2"></span>
                  {beneficio}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card max-w-md mx-auto text-center"
        >
          <QrCode className="w-16 h-16 text-club-gold-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-club-white mb-2">Carnet Digital</h3>
          <p className="text-club-gray-400 text-sm mb-4">
            Muestra este código QR para acceder a eventos y beneficios
          </p>
          <div className="w-48 h-48 bg-club-white mx-auto rounded-lg flex items-center justify-center">
            <QrCode className="w-32 h-32 text-club-black" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SociosDashboard;
