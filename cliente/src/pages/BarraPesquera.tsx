import { motion } from 'framer-motion';
import { Fish, Calendar, MapPin, Users, Trophy, Camera, Anchor } from 'lucide-react';

const BarraPesquera = () => {
  const actividades = [
    {
      id: '1',
      titulo: 'Torneos de Pesca',
      descripcion: 'Participa en nuestros torneos mensuales de pesca deportiva',
      icon: Trophy,
      imagen: '/486688915_2636109269922248_5474496885224647034_n.jpg',
    },
    {
      id: '2',
      titulo: 'Excursiones de Pesca',
      descripcion: 'Salidas grupales a los mejores lugares de pesca de la región',
      icon: Anchor,
      imagen: '/450604841_2420050368194807_476765102751728094_n.jpg',
    },
    {
      id: '3',
      titulo: 'Escuela de Pesca',
      descripcion: 'Aprende técnicas de pesca con nuestros instructores expertos',
      icon: Users,
      imagen: '/466007273_10228817423593917_1038615226782194342_n.jpg',
    },
  ];

  const especies = [
    { nombre: 'Dorado', temporada: 'Todo el año' },
    { nombre: 'Surubí', temporada: 'Octubre - Marzo' },
    { nombre: 'Pacú', temporada: 'Noviembre - Abril' },
    { nombre: 'Boga', temporada: 'Todo el año' },
  ];

  return (
    <div className="min-h-screen bg-club-black">
      {/* Hero Section con imagen de pesca */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-overlay z-10"></div>
        <div
          className="absolute inset-0 parallax-bg bg-cover bg-center"
          style={{
            backgroundImage: "url('/descarga (1).jpeg')",
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
            <Fish className="w-20 h-20 text-club-gold-500 mx-auto glow-effect" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-club-white mb-4 text-glow">
            Barra Pesquera
          </h1>
          <p className="text-xl md:text-2xl text-club-gray-200 max-w-2xl mx-auto mb-8">
            Club de Pesca del Central Goya
          </p>
          <p className="text-lg text-club-gray-300 max-w-3xl mx-auto">
            Un espacio dedicado a la pesca deportiva, donde la pasión por el río se encuentra con la tradición del club
          </p>
        </motion.div>
      </section>

      {/* Sobre la Barra Pesquera */}
      <section className="py-20 bg-gradient-to-b from-club-black to-club-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="section-title">Sobre Nuestra Barra Pesquera</h2>
            <p className="text-club-gray-300 text-lg leading-relaxed">
              La Barra Pesquera del Club Atlético Central Goya es un espacio único donde los amantes de la pesca se reúnen
              para compartir experiencias, participar en torneos y disfrutar de la naturaleza. Ubicados en una de las mejores
              zonas de pesca de Corrientes, ofrecemos actividades para pescadores de todos los niveles.
            </p>
          </motion.div>

          {/* Actividades */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {actividades.map((actividad, index) => (
              <motion.div
                key={actividad.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card-glass group overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${actividad.imagen}')` }}
                >
                  <div className="h-full bg-gradient-to-t from-club-black/90 via-club-black/50 to-transparent flex items-end p-6">
                    <actividad.icon className="w-12 h-12 text-club-gold-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-club-white mb-3 group-hover:text-club-gold-500 transition-colors">
                    {actividad.titulo}
                  </h3>
                  <p className="text-club-gray-300">{actividad.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Especies y Temporadas */}
      <section className="py-20 bg-club-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Especies que Pescamos</h2>
            <p className="section-subtitle">
              Las mejores especies del río Paraná y sus afluentes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especies.map((especie, index) => (
              <motion.div
                key={especie.nombre}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group hover:border-club-gold-500/70"
              >
                <Fish className="w-12 h-12 text-club-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-club-white mb-2">{especie.nombre}</h3>
                <p className="text-club-gray-400 text-sm">{especie.temporada}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-20 bg-club-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title flex items-center justify-center">
              <Camera className="w-10 h-10 text-club-gold-500 mr-4" />
              Galería de Capturas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/descarga (1).jpeg',
              '/REC-PIRA_ARO.jpg',
              '/REC-HURACAN.jpg',
              '/486688915_2636109269922248_5474496885224647034_n.jpg',
              '/450604841_2420050368194807_476765102751728094_n.jpg',
              '/466007273_10228817423593917_1038615226782194342_n.jpg',
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
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-gradient-to-b from-club-gray-900 to-club-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass max-w-2xl mx-auto text-center"
          >
            <MapPin className="w-16 h-16 text-club-gold-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-club-white mb-4">¿Quieres Unirte?</h2>
            <p className="text-club-gray-300 mb-6">
              Para más información sobre la Barra Pesquera, actividades, torneos y cómo asociarte,
              contacta con nosotros a través de la secretaría del club.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">
                Contactar
              </button>
              <button className="btn-outline">
                Ver Calendario
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BarraPesquera;
