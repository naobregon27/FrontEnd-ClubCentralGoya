import { motion } from 'framer-motion';
import { Calendar, Trophy } from 'lucide-react';
import { mockHistoria } from '@/services/mockData/historia';

const Historia = () => {
  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Historia del Club</h1>
          <p className="section-subtitle">
            Un siglo de pasión y tradición • 1923 - 2023
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-club-gold-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {mockHistoria.map((evento, index) => (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-club-gold-500 rounded-full border-4 border-club-black"></div>

                  {/* Content */}
                  <div className="card">
                    <div className="flex items-center space-x-4 mb-4">
                      <Calendar className="w-6 h-6 text-club-gold-500" />
                      <span className="text-2xl font-bold text-club-white">{evento.año}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-club-white mb-2">{evento.titulo}</h3>
                    <p className="text-club-gray-300 mb-4">{evento.descripcion}</p>
                    {evento.logros && evento.logros.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-club-gray-800">
                        <div className="flex items-center space-x-2 mb-2">
                          <Trophy className="w-5 h-5 text-club-gold-500" />
                          <span className="text-club-gray-400 text-sm font-semibold">Logros:</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                          {evento.logros.map((logro, idx) => (
                            <li key={idx} className="text-club-gray-300 text-sm">
                              {logro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
