import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, MapPin } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setPartidos, setCategoriaActiva } from '@/store/slices/partidosSlice';
import { setTorneos } from '@/store/slices/torneosSlice';
import { mockPartidos } from '@/services/mockData/partidos';
import { mockTorneos } from '@/services/mockData/torneos';

const FutbolMasculino = () => {
  const dispatch = useAppDispatch();
  const { partidos } = useAppSelector((state) => state.partidos);
  const { torneos } = useAppSelector((state) => state.torneos);

  useEffect(() => {
    dispatch(setCategoriaActiva('masculino'));
    dispatch(setPartidos(mockPartidos));
    dispatch(setTorneos(mockTorneos));
  }, [dispatch]);

  const partidosMasculino = partidos.filter((p) => p.categoria === 'masculino');
  const torneosMasculino = torneos.filter((t) => t.categoria === 'masculino');

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Fútbol Masculino</h1>
          <p className="section-subtitle">Sigue a nuestro equipo de Primera División</p>
        </div>

        {/* Próximos Partidos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-club-gold-500" />
            Próximos Partidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partidosMasculino
              .filter((p) => p.estado === 'programado')
              .slice(0, 3)
              .map((partido, index) => (
                <motion.div
                  key={partido.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-center">
                    <p className="text-club-gray-400 text-sm mb-2">
                      {new Date(partido.fecha).toLocaleDateString('es-AR', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                      })}
                    </p>
                    <p className="text-club-gold-500 font-semibold mb-4">{partido.hora}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 text-right">
                        <p className="font-semibold text-club-white">{partido.local}</p>
                      </div>
                      <span className="mx-4 text-club-gray-500">vs</span>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-club-white">{partido.visitante}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-club-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {partido.cancha}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Galería de Fotos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-club-gold-500" />
            Galería
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              '/486688915_2636109269922248_5474496885224647034_n.jpg',
              '/517106609_10163747557199734_7756948239092276675_n.jpg',
              '/450604841_2420050368194807_476765102751728094_n.jpg',
            ].map((imagen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass overflow-hidden group cursor-pointer"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${imagen}')` }}
                ></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Torneos */}
        <section>
          <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-club-gold-500" />
            Torneos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {torneosMasculino.map((torneo, index) => (
              <motion.div
                key={torneo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-club-white mb-2">{torneo.nombre}</h3>
                <p className="text-club-gray-400 mb-4">{torneo.formato}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-club-gray-400 text-sm">Equipos</p>
                    <p className="text-club-white font-semibold">{torneo.equipos}</p>
                  </div>
                  <div>
                    <p className="text-club-gray-400 text-sm">Estado</p>
                    <p className="text-club-white font-semibold capitalize">{torneo.estado}</p>
                  </div>
                </div>
                {torneo.tabla && (
                  <div className="mt-4 pt-4 border-t border-club-gray-800">
                    <p className="text-club-gray-400 text-sm mb-2">Posición Actual</p>
                    <div className="flex items-center justify-between">
                      <span className="text-club-white font-semibold">Central Goya</span>
                      <span className="text-club-gold-500 font-bold">
                        {torneo.tabla.puntos} pts
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FutbolMasculino;
