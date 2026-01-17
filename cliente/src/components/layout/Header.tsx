import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, ShoppingCart, ChevronDown, Trophy } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { toggleMenuMobile } from '@/store/slices/uiSlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { menuMobileOpen } = useAppSelector((state) => state.ui);
  const { isAuthenticated } = useAppSelector((state) => state.socios);
  const { carrito } = useAppSelector((state) => state.indumentaria);
  const [futbolMenuOpen, setFutbolMenuOpen] = useState(false);

  const futbolItems = [
    { path: '/futbol-masculino', label: 'Masculino', icon: Trophy },
    { path: '/futbol-femenino', label: 'Femenino', icon: Trophy },
    { path: '/futbol-juvenil', label: 'Juvenil', icon: Trophy },
    { path: '/futbol-infantil', label: 'Infantil', icon: Trophy },
    { path: '/futbol-veterano', label: 'Veterano', icon: Trophy },
  ];

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/voley', label: 'Voley' },
    { path: '/obras', label: 'Obras' },
    { path: '/indumentaria', label: 'Indumentaria' },
    { path: '/barra-pesquera', label: 'Barra Pesquera' },
    { path: '/historia', label: 'Historia' },
    { path: '/calendarios', label: 'Calendarios' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isFutbolActive = futbolItems.some(item => location.pathname === item.path);

  return (
    <header className="sticky top-0 z-50 bg-club-black/95 backdrop-blur-xl border-b border-club-gray-800/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(245,158,11,0.4)] group-hover:shadow-[0_6px_20px_rgba(245,158,11,0.6)] transition-all duration-300 group-hover:scale-110 overflow-hidden bg-club-black/50 backdrop-blur-sm border border-club-gold-500/30">
              <img 
                src="/central-goya-de-corrientes-logo-png_seeklogo-330475 (1).png" 
                alt="Central Goya" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-club-white font-bold text-lg group-hover:text-club-gold-500 transition-colors">Central Goya</h1>
              <p className="text-club-gray-400 text-xs">Club Atlético</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-club-gold-500 to-club-gold-600 text-club-black font-bold shadow-[0_4px_15px_rgba(245,158,11,0.4)]'
                    : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800/50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-club-gold-400 rounded-full"></span>
                )}
              </Link>
            ))}
            
            {/* Menú Desplegable Fútbol */}
            <div 
              className="relative"
              onMouseEnter={() => setFutbolMenuOpen(true)}
              onMouseLeave={() => setFutbolMenuOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-xl transition-all duration-300 relative group flex items-center space-x-1 ${
                  isFutbolActive
                    ? 'bg-gradient-to-r from-club-gold-500 to-club-gold-600 text-club-black font-bold shadow-[0_4px_15px_rgba(245,158,11,0.4)]'
                    : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800/50'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Fútbol</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${futbolMenuOpen ? 'rotate-180' : ''}`} />
                {isFutbolActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-club-gold-400 rounded-full"></span>
                )}
              </button>
              
              {/* Dropdown Menu */}
              {futbolMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-club-gray-900/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-club-gray-800/50 overflow-hidden z-50"
                >
                  <div className="p-2">
                    {futbolItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setFutbolMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-club-gold-500/20 to-club-gold-600/20 text-club-gold-400 border border-club-gold-500/30'
                            : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800/50'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${isActive(item.path) ? 'text-club-gold-500' : 'text-club-gray-400 group-hover:text-club-gold-500'}`} />
                        <span className="font-semibold">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-club-gold-500 to-club-gold-600 text-club-black font-bold shadow-[0_4px_15px_rgba(245,158,11,0.4)]'
                    : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800/50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-club-gold-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/indumentaria"
              className="relative p-2 text-club-white hover:text-club-gold-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {carrito.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-club-gold-500 text-club-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {carrito.length}
                </span>
              )}
            </Link>

            <Link
              to={isAuthenticated ? '/socios/dashboard' : '/socios/login'}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-club-gray-800 hover:bg-club-gray-700 text-club-white rounded-lg transition-all duration-300"
            >
              <User className="w-5 h-5" />
              <span>{isAuthenticated ? 'Mi Cuenta' : 'Socios'}</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleMenuMobile())}
              className="lg:hidden p-2 text-club-white hover:text-club-gold-500 transition-colors"
            >
              {menuMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuMobileOpen && (
          <div className="lg:hidden py-4 border-t border-club-gray-800">
            <div className="flex flex-col space-y-2">
              {menuItems.slice(0, 1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => dispatch(toggleMenuMobile())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-club-gold-500 text-club-black font-semibold'
                      : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Fútbol Menu */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setFutbolMenuOpen(!futbolMenuOpen)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 ${
                    isFutbolActive
                      ? 'bg-club-gold-500 text-club-black font-semibold'
                      : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4" />
                    <span>Fútbol</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${futbolMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {futbolMenuOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {futbolItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          dispatch(toggleMenuMobile());
                          setFutbolMenuOpen(false);
                        }}
                        className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'bg-club-gold-500/30 text-club-gold-400 font-semibold border border-club-gold-500/30'
                            : 'text-club-gray-400 hover:text-club-white hover:bg-club-gray-800'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => dispatch(toggleMenuMobile())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-club-gold-500 text-club-black font-semibold'
                      : 'text-club-gray-300 hover:text-club-white hover:bg-club-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={isAuthenticated ? '/socios/dashboard' : '/socios/login'}
                onClick={() => dispatch(toggleMenuMobile())}
                className="flex items-center space-x-2 px-4 py-2 bg-club-gray-800 hover:bg-club-gray-700 text-club-white rounded-lg transition-all duration-300 mt-4"
              >
                <User className="w-5 h-5" />
                <span>{isAuthenticated ? 'Mi Cuenta' : 'Socios'}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
