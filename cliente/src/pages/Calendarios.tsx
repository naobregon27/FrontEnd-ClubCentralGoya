import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setPartidos, setCategoriaActiva } from '@/store/slices/partidosSlice';
import { setTorneos } from '@/store/slices/torneosSlice';
import { mockPartidos } from '@/services/mockData/partidos';
import { mockTorneos } from '@/services/mockData/torneos';

const Calendarios = () => {
  const dispatch = useAppDispatch();
  const { partidos, categoriaActiva } = useAppSelector((state) => state.partidos);
  const { torneos } = useAppSelector((state) => state.torneos);

  useEffect(() => {
    dispatch(setPartidos(mockPartidos));
    dispatch(setTorneos(mockTorneos));
  }, [dispatch]);

  const categorias = ['todos', 'masculino', 'femenino', 'juvenil', 'infantil', 'veterano'];
  const partidosFiltrados = categoriaActiva === 'todos'
    ? partidos
    : partidos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Calendarios y Torneos</h1>
          <p className="section-subtitle">
            Todos los partidos y competencias de Central Goya
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategoriaActiva(cat as any))}
              className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize ${
                categoriaActiva === cat
                  ? 'bg-club-gold-500 text-club-black font-semibold'
                  : 'bg-club-gray-800 text-club-gray-300 hover:bg-club-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partidos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-club-white mb-6">Partidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partidosFiltrados.map((partido, index) => (
              <motion.div
                key={partido.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-club-gray-800 text-club-gray-300 rounded-full text-xs capitalize">
                    {partido.categoria}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partido.estado === 'finalizado' ? 'bg-green-500/20 text-green-400' :
                    partido.estado === 'enVivo' ? 'bg-red-500/20 text-red-400' :
                    'bg-club-gold-500/20 text-club-gold-400'
                  }`}>
                    {partido.estado === 'finalizado' ? 'Finalizado' :
                     partido.estado === 'enVivo' ? 'En Vivo' : 'Programado'}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-club-white text-sm">{partido.local}</p>
                    {partido.resultado ? (
                      <span className="text-club-gold-500 font-bold mx-4">
                        {partido.resultado.golesLocal} - {partido.resultado.golesVisitante}
                      </span>
                    ) : (
                      <span className="text-club-gray-500 mx-4">vs</span>
                    )}
                    <p className="font-semibold text-club-white text-sm">{partido.visitante}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-club-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(partido.fecha).toLocaleDateString('es-AR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {partido.hora}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {partido.cancha}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Torneos */}
        <section>
          <h2 className="text-2xl font-bold text-club-white mb-6">Torneos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {torneos.map((torneo, index) => (
              <motion.div
                key={torneo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-club-white mb-2">{torneo.nombre}</h3>
                <p className="text-club-gray-400 mb-4 capitalize">{torneo.categoria}</p>
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
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calendarios;
