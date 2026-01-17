import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Fútbol',
      links: [
        { to: '/futbol-masculino', label: 'Fútbol Masculino' },
        { to: '/futbol-femenino', label: 'Fútbol Femenino' },
        { to: '/futbol-juvenil', label: 'Fútbol Juvenil' },
        { to: '/futbol-infantil', label: 'Fútbol Infantil' },
        { to: '/futbol-veterano', label: 'Fútbol Veterano' },
      ],
    },
    {
      title: 'Club',
      links: [
        { to: '/noticias', label: 'Noticias' },
        { to: '/historia', label: 'Historia' },
        { to: '/obras', label: 'Obras' },
        { to: '/calendarios', label: 'Calendarios' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { to: '/socios', label: 'Socios' },
        { to: '/indumentaria', label: 'Indumentaria' },
        { to: '/barra-pesquera', label: 'Barra Pesquera' },
        { to: '/cuota-social', label: 'Cuota Social' },
      ],
    },
  ];

  return (
    <footer className="bg-club-gray-900 border-t border-club-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-club-gold-500 rounded-full flex items-center justify-center">
                <span className="text-club-black font-bold text-xl">CG</span>
              </div>
              <div>
                <h3 className="text-club-white font-bold">Central Goya</h3>
                <p className="text-club-gray-400 text-sm">Club Atlético</p>
              </div>
            </div>
            <p className="text-club-gray-400 text-sm mb-4">
              Club Atlético Central Goya - Fundado en 1923
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-club-gray-400 hover:text-club-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-club-gray-400 hover:text-club-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-club-gray-400 hover:text-club-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-club-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-club-gray-400 hover:text-club-gold-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto */}
          <div>
            <h4 className="text-club-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-club-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Goya, Corrientes, Argentina</span>
              </li>
              <li className="flex items-center space-x-2 text-club-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+54 3777 123456</span>
              </li>
              <li className="flex items-center space-x-2 text-club-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@centralgoya.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-club-gray-800 mt-8 pt-8 text-center">
          <p className="text-club-gray-400 text-sm">
            © {currentYear} Club Atlético Central Goya. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
