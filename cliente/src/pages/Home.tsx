import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Newspaper, ArrowRight } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { setNoticias } from '@/store/slices/noticiasSlice';
import { setPartidos } from '@/store/slices/partidosSlice';
import { mockNoticias } from '@/services/mockData/noticias';
import { mockPartidos } from '@/services/mockData/partidos';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Cargar datos mockeados
    dispatch(setNoticias(mockNoticias));
    dispatch(setPartidos(mockPartidos));
  }, [dispatch]);

  const proximosPartidos = mockPartidos
    .filter((p) => p.estado === 'programado')
    .slice(0, 3);

  const noticiasDestacadas = mockNoticias.filter((n) => n.destacada).slice(0, 3);

  const secciones = [
    {
      title: 'Fútbol Masculino',
      description: 'Sigue a nuestro equipo de Primera División',
      icon: Trophy,
      link: '/futbol-masculino',
      color: 'from-club-gold-500 to-club-gold-700',
    },
    {
      title: 'Fútbol Femenino',
      description: 'Las chicas de Central Goya',
      icon: Users,
      link: '/futbol-femenino',
      color: 'from-club-gray-600 to-club-gray-800',
    },
    {
      title: 'Noticias',
      description: 'Últimas novedades del club',
      icon: Newspaper,
      link: '/noticias',
      color: 'from-club-gold-500 to-club-gold-700',
    },
    {
      title: 'Calendarios',
      description: 'Próximos partidos y torneos',
      icon: Calendar,
      link: '/calendarios',
      color: 'from-club-gray-600 to-club-gray-800',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-overlay z-10"></div>
        <div
          className="absolute inset-0 parallax-bg bg-cover bg-center field-lines"
          style={{
            backgroundImage: "url('/517106609_10163747557199734_7756948239092276675_n.jpg')",
          }}
        ></div>
        {/* Efecto de líneas de cancha */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-club-white"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-club-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-20 h-32 border-2 border-club-white transform -translate-y-1/2 border-r-0 rounded-l-full"></div>
          <div className="absolute top-1/2 right-0 w-20 h-32 border-2 border-club-white transform -translate-y-1/2 border-l-0 rounded-r-full"></div>
        </div>
        {/* Efecto de partículas de fondo */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-club-gold-500 rounded-full opacity-60 animate-pulse football-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-club-gold-400 rounded-full opacity-50 animate-pulse football-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-club-gold-500 rounded-full opacity-60 animate-pulse football-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-club-gold-400 rounded-full opacity-40 animate-pulse football-glow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.8)] glow-effect-hover bg-club-black/40 backdrop-blur-xl border-4 border-club-gold-500/60 p-4 overflow-hidden pulse-glow float-animation">
              <img 
                src="/central-goya-de-corrientes-logo (1).png" 
                alt="Central Goya" 
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-extrabold text-club-white mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Club Atlético
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold gradient-text mb-6 text-glow drop-shadow-[0_0_40px_rgba(245,158,11,0.6)]"
          >
            Central Goya
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-club-gray-200 max-w-2xl mx-auto mb-8 font-light tracking-wide"
          >
            <span className="text-club-gold-400 font-semibold">Un siglo de pasión</span> • 1923 - 2023
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/noticias" className="btn-primary text-lg px-8 py-4 football-glow">
              Ver Noticias
            </Link>
            <Link to="/calendarios" className="btn-outline text-lg px-8 py-4 neon-border">
              Próximos Partidos
            </Link>
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-club-gold-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-club-gold-500 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Próximos Partidos */}
      {proximosPartidos.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-club-black via-club-gray-900 to-club-black relative overflow-hidden">
          {/* Efecto de fondo decorativo con líneas de cancha */}
          <div className="absolute inset-0 opacity-10 field-lines"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl pulse-glow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }}></div>
          </div>
          {/* Efecto de balón flotante */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-club-gold-500/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-club-gold-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '3s' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-center mb-4"
            >
              Próximos Partidos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-club-gray-400 text-lg mb-12"
            >
              No te pierdas los próximos encuentros de Central Goya
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proximosPartidos.map((partido, index) => (
                <motion.div
                  key={partido.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card-glass group neon-border relative overflow-hidden"
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-club-gold-500/0 via-club-gold-500/0 to-club-gold-500/0 group-hover:from-club-gold-500/10 group-hover:via-club-gold-500/5 group-hover:to-club-gold-500/0 transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-2 h-2 bg-club-gold-500 rounded-full mr-2 pulse-glow"></div>
                      <p className="text-club-gray-400 text-sm font-semibold">
                        {new Date(partido.fecha).toLocaleDateString('es-AR', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </p>
                      <div className="w-2 h-2 bg-club-gold-500 rounded-full ml-2 pulse-glow"></div>
                    </div>
                    <p className="text-club-gold-500 font-bold text-lg mb-4 text-glow">{partido.hora}</p>
                    <div className="flex items-center justify-between mb-4 px-4">
                      <div className="flex-1 text-right">
                        <p className="font-bold text-club-white text-sm group-hover:text-club-gold-400 transition-colors">{partido.local}</p>
                      </div>
                      <span className="mx-4 text-club-gold-500 font-bold text-xl">VS</span>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-club-white text-sm group-hover:text-club-gold-400 transition-colors">{partido.visitante}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-club-gray-400 text-xs">
                      <div className="w-1 h-1 bg-club-gold-500 rounded-full mr-2"></div>
                      <p>{partido.cancha}</p>
                      <div className="w-1 h-1 bg-club-gold-500 rounded-full ml-2"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/calendarios" className="btn-secondary inline-flex items-center">
                Ver Todos los Partidos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Noticias Destacadas */}
      {noticiasDestacadas.length > 0 && (
        <section className="py-20 bg-club-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 field-lines"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-club-gold-500 rounded-full blur-3xl pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-club-gold-500 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Efectos de partículas */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-club-gold-500/30 rounded-full float-animation"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-club-gold-400/30 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-center mb-4"
            >
              Últimas Noticias
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-club-gray-400 text-lg mb-12"
            >
              Mantente informado con las últimas novedades del club
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {noticiasDestacadas.map((noticia, index) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card-glass group cursor-pointer overflow-hidden neon-border"
                >
                  <div
                    className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
                    style={{
                      backgroundImage: `url(${noticia.imagen || '/486688915_2636109269922248_5474496885224647034_n.jpg'})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-club-black via-transparent to-transparent"></div>
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-club-gold-500/0 group-hover:bg-club-gold-500/10 transition-all duration-500"></div>
                    {noticia.destacada && (
                      <div className="absolute top-4 right-4 bg-club-gold-500 text-club-black px-3 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.6)] pulse-glow">
                        ⭐ Destacada
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-club-white mb-2 group-hover:text-club-gold-500 transition-colors">
                      {noticia.titulo}
                    </h3>
                    <p className="text-club-gray-400 text-sm mb-4 line-clamp-2">
                      {noticia.resumen}
                    </p>
                    <Link
                      to={`/noticias/${noticia.id}`}
                      className="text-club-gold-500 hover:text-club-gold-400 font-semibold text-sm inline-flex items-center"
                    >
                      Leer más
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/noticias" className="btn-secondary inline-flex items-center">
                Ver Todas las Noticias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Secciones Principales */}
      <section className="py-20 bg-gradient-to-b from-club-gray-900 via-club-black to-club-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 field-lines"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Efectos decorativos de balones */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-club-gold-500/10 rounded-full blur-2xl float-animation"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-club-gold-500/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            Explorar el Club
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-club-gray-400 text-lg mb-12"
          >
            Descubre todo lo que Central Goya tiene para ofrecerte
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secciones.map((seccion, index) => (
              <motion.div
                key={seccion.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={seccion.link}
                  className="card-glass group h-full flex flex-col hover:border-club-gold-500/70 relative overflow-hidden neon-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-club-gold-500/0 to-club-gold-500/0 group-hover:from-club-gold-500/10 group-hover:to-club-gold-500/5 transition-all duration-500"></div>
                  {/* Efecto de brillo en las esquinas */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-club-gold-500/0 group-hover:bg-club-gold-500/5 rounded-br-full transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-club-gold-500/0 group-hover:bg-club-gold-500/5 rounded-tl-full transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${seccion.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_4px_15px_rgba(245,158,11,0.3)] group-hover:shadow-[0_8px_25px_rgba(245,158,11,0.6)] football-glow`}
                    >
                      <seccion.icon className="w-10 h-10 text-club-white group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-club-white mb-3 group-hover:text-club-gold-500 transition-colors">
                      {seccion.title}
                    </h3>
                    <p className="text-club-gray-400 text-sm flex-grow mb-4">{seccion.description}</p>
                    <div className="flex items-center text-club-gold-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Explorar
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
