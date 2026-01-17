import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, ArrowRight } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setNoticias, setNoticiaSeleccionada, setFiltroCategoria } from '@/store/slices/noticiasSlice';
import { mockNoticias } from '@/services/mockData/noticias';

const Noticias = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { noticias, noticiaSeleccionada, filtroCategoria } = useAppSelector((state) => state.noticias);

  useEffect(() => {
    dispatch(setNoticias(mockNoticias));
    if (id) {
      const noticia = mockNoticias.find((n) => n.id === id);
      dispatch(setNoticiaSeleccionada(noticia || null));
    }
  }, [id, dispatch]);

  const categorias = ['Todos', 'Primera', 'Femenino', 'General', 'Obras', 'Social'];
  const noticiasFiltradas = filtroCategoria && filtroCategoria !== 'Todos'
    ? noticias.filter((n) => n.categoria === filtroCategoria)
    : noticias;

  if (id && noticiaSeleccionada) {
    return (
      <div className="min-h-screen bg-club-black py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/noticias"
            className="inline-flex items-center text-club-gold-500 hover:text-club-gold-400 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Noticias
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <div
              className="h-96 bg-cover bg-center rounded-lg mb-6"
              style={{ backgroundImage: `url(${noticiaSeleccionada.imagen})` }}
            ></div>
            <div className="flex items-center space-x-4 mb-4 text-club-gray-400 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(noticiaSeleccionada.fecha).toLocaleDateString('es-AR')}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {noticiaSeleccionada.autor}
              </span>
              <span className="px-3 py-1 bg-club-gray-800 rounded-full">
                {noticiaSeleccionada.categoria}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-club-white mb-4">{noticiaSeleccionada.titulo}</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-club-gray-300 text-lg leading-relaxed mb-6">
                {noticiaSeleccionada.resumen}
              </p>
              <p className="text-club-gray-300 leading-relaxed whitespace-pre-line">
                {noticiaSeleccionada.contenido}
              </p>
            </div>
            {noticiaSeleccionada.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-club-gray-800">
                <div className="flex flex-wrap gap-2">
                  {noticiaSeleccionada.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-club-gray-800 text-club-gray-300 rounded-full text-sm"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-club-black py-12 relative overflow-hidden">
      {/* Efecto de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-club-gold-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title text-center"
        >
          Noticias del Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-center"
        >
          Mantente al día con las últimas novedades de Central Goya
        </motion.p>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setFiltroCategoria(cat === 'Todos' ? null : cat))}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                (filtroCategoria === cat || (!filtroCategoria && cat === 'Todos'))
                  ? 'bg-gradient-to-r from-club-gold-500 to-club-gold-600 text-club-black shadow-[0_4px_15px_rgba(245,158,11,0.4)] scale-105'
                  : 'bg-club-gray-800/80 backdrop-blur-sm text-club-gray-300 hover:bg-club-gray-700 hover:text-club-white border border-club-gray-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasFiltradas.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/noticias/${noticia.id}`} className="card-glass group block h-full overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
                  style={{ backgroundImage: `url(${noticia.imagen})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-club-black via-club-black/50 to-transparent"></div>
                  {noticia.destacada && (
                    <div className="absolute top-4 right-4 bg-club-gold-500 text-club-black px-3 py-1 rounded-full text-xs font-bold">
                      Destacada
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-club-gold-500/20 text-club-gold-400 rounded-full text-xs font-semibold border border-club-gold-500/30">
                      {noticia.categoria}
                    </span>
                    <span className="text-club-gray-400 text-xs flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(noticia.fecha).toLocaleDateString('es-AR')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-club-white mb-3 group-hover:text-club-gold-500 transition-colors line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-club-gray-400 text-sm line-clamp-3 mb-4">{noticia.resumen}</p>
                  <div className="flex items-center text-club-gold-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Leer más
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
