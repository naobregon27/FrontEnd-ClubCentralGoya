import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Activity } from 'lucide-react';

const Voley = () => {
  const equipos = [
    {
      id: '1',
      categoria: 'Femenino',
      descripcion: 'Equipo de primera división femenino',
      imagen: '/WhatsApp Image 2026-01-17 at 13.04.27.jpeg',
    },
    {
      id: '2',
      categoria: 'Masculino',
      descripcion: 'Equipo de primera división masculino',
      imagen: '/WhatsApp Image 2026-01-17 at 13.04.27.jpeg',
    },
  ];

  const proximosPartidos = [
    {
      id: '1',
      fecha: '2026-02-15',
      hora: '19:00',
      local: 'Central Goya',
      visitante: 'Club Deportivo',
      cancha: 'Polideportivo Central Goya',
    },
    {
      id: '2',
      fecha: '2026-02-22',
      hora: '20:00',
      local: 'Sportivo Goya',
      visitante: 'Central Goya',
      cancha: 'Polideportivo Sportivo',
    },
  ];

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl mb-12">
          <div className="absolute inset-0 hero-overlay z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/WhatsApp Image 2026-01-17 at 13.04.27.jpeg')",
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="mb-6"
            >
              <Activity className="w-20 h-20 text-club-gold-500 mx-auto glow-effect" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-club-white mb-4 text-glow">
              Voley
            </h1>
            <p className="text-xl md:text-2xl text-club-gray-200 max-w-2xl mx-auto">
              El voley en Central Goya: pasión, técnica y trabajo en equipo
            </p>
          </motion.div>
        </div>

        {/* Equipos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-club-white mb-8 flex items-center">
            <Users className="w-8 h-8 mr-3 text-club-gold-500" />
            Nuestros Equipos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipos.map((equipo, index) => (
              <motion.div
                key={equipo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card overflow-hidden group"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${equipo.imagen}')` }}
                >
                  <div className="h-full bg-gradient-to-t from-club-black/90 via-club-black/50 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-club-white mb-2">
                        Voley {equipo.categoria}
                      </h3>
                      <p className="text-club-gray-300">{equipo.descripcion}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Próximos Partidos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-club-white mb-8 flex items-center">
            <Calendar className="w-8 h-8 mr-3 text-club-gold-500" />
            Próximos Partidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proximosPartidos.map((partido, index) => (
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
                    <Trophy className="w-4 h-4 mr-1" />
                    {partido.cancha}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Información Adicional */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center"
          >
            <Activity className="w-16 h-16 text-club-gold-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-club-white mb-4">
              Voley en Central Goya
            </h2>
            <p className="text-club-gray-300 text-lg leading-relaxed mb-6">
              El voley es una disciplina que ha crecido significativamente en Central Goya. 
              Contamos con equipos en diferentes categorías que participan activamente en 
              torneos locales y regionales, representando con orgullo los colores del club.
            </p>
            <p className="text-club-gray-400">
              Para más información sobre entrenamientos, inscripciones y calendario de partidos, 
              contacta con la secretaría del club.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Voley;
