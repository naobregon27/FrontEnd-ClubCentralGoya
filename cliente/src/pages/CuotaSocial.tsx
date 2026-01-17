import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

const CuotaSocial = () => {
  const { currentSocio, cuotas } = useAppSelector((state) => state.socios);

  const mockCuotas = [
    {
      id: '1',
      mes: 'Enero',
      año: 2024,
      monto: 5000,
      fechaVencimiento: '2024-01-10',
      estado: 'pagada' as const,
      metodoPago: 'Transferencia',
      fechaPago: '2024-01-05',
    },
    {
      id: '2',
      mes: 'Febrero',
      año: 2024,
      monto: 5000,
      fechaVencimiento: '2024-02-10',
      estado: 'vencida' as const,
    },
  ];

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'pagada':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'vencida':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-club-gold-500" />;
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="section-title">Cuota Social</h1>
          <p className="section-subtitle">
            Gestiona tus cuotas y pagos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card text-center"
          >
            <CreditCard className="w-12 h-12 text-club-gold-500 mx-auto mb-4" />
            <p className="text-club-gray-400 text-sm mb-2">Cuota Mensual</p>
            <p className="text-3xl font-bold text-club-white">$5.000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-club-gray-400 text-sm mb-2">Al Día</p>
            <p className="text-3xl font-bold text-club-white">
              {mockCuotas.filter((c) => c.estado === 'pagada').length}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-club-gray-400 text-sm mb-2">Vencidas</p>
            <p className="text-3xl font-bold text-club-white">
              {mockCuotas.filter((c) => c.estado === 'vencida').length}
            </p>
          </motion.div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-club-white mb-6">Historial de Cuotas</h2>
          <div className="space-y-4">
            {mockCuotas.map((cuota, index) => (
              <motion.div
                key={cuota.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-club-gray-800 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {getEstadoIcon(cuota.estado)}
                  <div>
                    <p className="text-club-white font-semibold">
                      {cuota.mes} {cuota.año}
                    </p>
                    <p className="text-club-gray-400 text-sm">
                      Vencimiento: {new Date(cuota.fechaVencimiento).toLocaleDateString('es-AR')}
                    </p>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuotaSocial;
