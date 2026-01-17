import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, MapPin, Camera } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPartidos, setCategoriaActiva } from '@/store/slices/partidosSlice';
import { setTorneos } from '@/store/slices/torneosSlice';
import { mockPartidos } from '@/services/mockData/partidos';
import { mockTorneos } from '@/services/mockData/torneos';

const FutbolFemenino = () => {
  const dispatch = useAppDispatch();
  const { partidos } = useAppSelector((state) => state.partidos);
  const { torneos } = useAppSelector((state) => state.torneos);

  useEffect(() => {
    dispatch(setCategoriaActiva('femenino'));
    dispatch(setPartidos(mockPartidos));
    dispatch(setTorneos(mockTorneos));
  }, [dispatch]);

  const partidosFemenino = partidos.filter((p) => p.categoria === 'femenino');
  const torneosFemenino = torneos.filter((t) => t.categoria === 'femenino');

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl mb-12">
          <div className="absolute inset-0 hero-overlay z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/WhatsApp Image 2026-01-17 at 13.05.46.jpeg')",
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-club-white mb-4 text-glow">
              Fútbol Femenino
            </h1>
            <p className="text-xl md:text-2xl text-club-gray-200 max-w-2xl mx-auto">
              Las chicas de Central Goya
            </p>
          </motion.div>
        </div>

        {/* Información */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center mb-12"
          >
            <Users className="w-16 h-16 text-club-gold-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-club-white mb-4">
              Fútbol Femenino en Central Goya
            </h2>
            <p className="text-club-gray-300 text-lg leading-relaxed mb-4">
              El fútbol femenino es una de las disciplinas que más ha crecido en Central Goya. 
              Nuestro equipo de primera división participa activamente en torneos locales y 
              regionales, demostrando pasión, dedicación y talento en cada partido.
            </p>
            <p className="text-club-gray-400">
              Contamos con un plantel comprometido que entrena con profesionalismo y representa 
              con orgullo los colores del club en cada competencia.
            </p>
          </motion.div>
        </section>

        {/* Próximos Partidos */}
        {partidosFemenino.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-club-gold-500" />
              Próximos Partidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partidosFemenino
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
        )}

        {/* Galería */}
        <section>
          <h2 className="text-2xl font-bold text-club-white mb-6 flex items-center">
            <Camera className="w-6 h-6 mr-2 text-club-gold-500" />
            Galería
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-glass overflow-hidden group cursor-pointer"
            >
              <div
                className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('/WhatsApp Image 2026-01-17 at 13.05.46.jpeg')" }}
              ></div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FutbolFemenino;
