import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setProductos, agregarAlCarrito, setCategoriaFiltro } from '@/store/slices/indumentariaSlice';
import { mockProductos } from '@/services/mockData/productos';
import { Producto } from '@/types';

const Indumentaria = () => {
  const dispatch = useAppDispatch();
  const { productos, carrito, categoriaFiltro } = useAppSelector((state) => state.indumentaria);
  const [talleSeleccionado, setTalleSeleccionado] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dispatch(setProductos(mockProductos));
  }, [dispatch]);

  const categorias = ['Todos', 'camiseta', 'short', 'medias', 'accesorios'];
  const productosFiltrados = categoriaFiltro && categoriaFiltro !== 'Todos'
    ? productos.filter((p) => p.categoria === categoriaFiltro)
    : productos;

  const handleAgregarAlCarrito = (producto: Producto) => {
    const talle = talleSeleccionado[producto.id] || producto.talles[0];
    dispatch(
      agregarAlCarrito({
        ...producto,
        cantidad: 1,
        talleSeleccionado: talle,
      })
    );
  };

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Indumentaria Oficial</h1>
          <p className="section-subtitle">
            Viste los colores de Central Goya
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategoriaFiltro(cat === 'Todos' ? null : cat))}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                (categoriaFiltro === cat || (!categoriaFiltro && cat === 'Todos'))
                  ? 'bg-club-gold-500 text-club-black font-semibold'
                  : 'bg-club-gray-800 text-club-gray-300 hover:bg-club-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={producto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div
                className="h-64 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${producto.imagen})` }}
              ></div>
              <h3 className="text-xl font-semibold text-club-white mb-2">{producto.nombre}</h3>
              <p className="text-club-gray-400 text-sm mb-4 line-clamp-2">{producto.descripcion}</p>
              <div className="mb-4">
                <p className="text-club-gray-400 text-sm mb-2">Talle:</p>
                <div className="flex flex-wrap gap-2">
                  {producto.talles.map((talle) => (
                    <button
                      key={talle}
                      onClick={() => setTalleSeleccionado({ ...talleSeleccionado, [producto.id]: talle })}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        talleSeleccionado[producto.id] === talle
                          ? 'bg-club-gold-500 text-club-black font-semibold'
                          : 'bg-club-gray-800 text-club-gray-300 hover:bg-club-gray-700'
                      }`}
                    >
                      {talle}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-club-gold-500">
                  ${producto.precio.toLocaleString('es-AR')}
                </span>
                <button
                  onClick={() => handleAgregarAlCarrito(producto)}
                  className="btn-primary flex items-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Agregar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Indumentaria;
