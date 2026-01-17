import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Construction, CheckCircle, Clock } from 'lucide-react';
import { Obra } from '@/types';
import { mockObras } from '@/services/mockData/obras';

const Obras = () => {
  const obras: Obra[] = mockObras;

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'finalizada':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'enCurso':
        return <Clock className="w-5 h-5 text-club-gold-500" />;
      default:
        return <Construction className="w-5 h-5 text-club-gray-400" />;
    }
  };

  const getEstadoLabel = (estado: string) => {
    switch (estado) {
      case 'finalizada':
        return 'Finalizada';
      case 'enCurso':
        return 'En Curso';
      default:
        return 'Planificada';
    }
  };

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Obras del Club</h1>
          <p className="section-subtitle">
            Mejorando continuamente nuestras instalaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {obras.map((obra, index) => (
            <motion.div
              key={obra.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div
                className="h-48 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${obra.imagen})` }}
              ></div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-club-white">{obra.titulo}</h3>
                <div className="flex items-center space-x-1">
                  {getEstadoIcon(obra.estado)}
                  <span className="text-club-gray-400 text-sm">{getEstadoLabel(obra.estado)}</span>
                </div>
              </div>
              <p className="text-club-gray-400 text-sm mb-4 line-clamp-3">{obra.descripcion}</p>
              {obra.avance !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-club-gray-400">Avance</span>
                    <span className="text-club-gold-500 font-semibold">{obra.avance}%</span>
                  </div>
                  <div className="w-full bg-club-gray-800 rounded-full h-2">
                    <div
                      className="bg-club-gold-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${obra.avance}%` }}
                    ></div>
                  </div>
                </div>
              )}
              {obra.fechaInicio && (
                <p className="text-club-gray-400 text-xs">
                  Inicio: {new Date(obra.fechaInicio).toLocaleDateString('es-AR')}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Obras;
