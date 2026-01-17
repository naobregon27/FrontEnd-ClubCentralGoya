import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { login, setCuotas } from '@/store/slices/sociosSlice';
import { Socio, CuotaSocial } from '@/types';

const SociosLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de credenciales hardcodeadas para el prototipo
    if (email === 'central@goya.com' && password === 'Mateo123!') {
      // Datos mock del socio
      const socioMock: Socio = {
        id: '1',
        nombre: 'Mateo',
        apellido: 'González',
        email: email,
        numeroSocio: '2024',
        fechaIngreso: '2020-01-15',
        estadoCuota: 'alDia',
        beneficios: ['Descuento en indumentaria', 'Acceso prioritario', 'Entrada gratuita a partidos'],
        carnetImagen: '/central-goya-de-corrientes-logo-png_seeklogo-330475 (1).png', // Imagen temporal del carnet
      };
      
      // Cuotas mock del socio
      const cuotasMock: CuotaSocial[] = [
        {
          id: '1',
          mes: 'Enero',
          año: 2024,
          monto: 5000,
          fechaVencimiento: '2024-01-10',
          estado: 'pagada',
          metodoPago: 'Transferencia',
          fechaPago: '2024-01-05',
        },
        {
          id: '2',
          mes: 'Febrero',
          año: 2024,
          monto: 5000,
          fechaVencimiento: '2024-02-10',
          estado: 'pagada',
          metodoPago: 'Transferencia',
          fechaPago: '2024-02-08',
        },
        {
          id: '3',
          mes: 'Marzo',
          año: 2024,
          monto: 5000,
          fechaVencimiento: '2024-03-10',
          estado: 'pagada',
          metodoPago: 'Efectivo',
          fechaPago: '2024-03-09',
        },
        {
          id: '4',
          mes: 'Abril',
          año: 2024,
          monto: 5000,
          fechaVencimiento: '2024-04-10',
          estado: 'pagada',
          metodoPago: 'Transferencia',
          fechaPago: '2024-04-07',
        },
        {
          id: '5',
          mes: 'Mayo',
          año: 2024,
          monto: 5000,
          fechaVencimiento: '2024-05-10',
          estado: 'vencida',
        },
      ];
      
      dispatch(login(socioMock));
      dispatch(setCuotas(cuotasMock));
      navigate('/socios/dashboard');
    } else {
      alert('Credenciales incorrectas. Usa: central@goya.com / Mateo123!');
    }
  };

  return (
    <div className="min-h-screen bg-club-black py-12 flex items-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-club-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-club-black" />
            </div>
            <h1 className="text-3xl font-bold text-club-white mb-2">Área de Socios</h1>
            <p className="text-club-gray-400">Ingresa con tu cuenta de socio</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-club-gray-300 text-sm font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-club-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-club-gray-800 border border-club-gray-700 rounded-lg text-club-white focus:outline-none focus:border-club-gold-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-club-gray-300 text-sm font-semibold mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-club-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-club-gray-800 border border-club-gray-700 rounded-lg text-club-white focus:outline-none focus:border-club-gold-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-club-gray-400 text-sm">
              ¿No eres socio?{' '}
              <Link to="/" className="text-club-gold-500 hover:text-club-gold-400 font-semibold">
                Contáctanos
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SociosLogin;
