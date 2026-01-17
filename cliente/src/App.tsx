import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import FutbolMasculino from './pages/FutbolMasculino';
import FutbolFemenino from './pages/FutbolFemenino';
import FutbolJuvenil from './pages/FutbolJuvenil';
import FutbolInfantil from './pages/FutbolInfantil';
import FutbolVeterano from './pages/FutbolVeterano';
import Voley from './pages/Voley';
import Obras from './pages/Obras';
import Indumentaria from './pages/Indumentaria';
import BarraPesquera from './pages/BarraPesquera';
import Historia from './pages/Historia';
import Calendarios from './pages/Calendarios';
import SociosLogin from './pages/SociosLogin';
import SociosDashboard from './pages/SociosDashboard';
import CuotaSocial from './pages/CuotaSocial';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<Noticias />} />
            <Route path="/futbol-masculino" element={<FutbolMasculino />} />
            <Route path="/futbol-femenino" element={<FutbolFemenino />} />
            <Route path="/futbol-juvenil" element={<FutbolJuvenil />} />
            <Route path="/futbol-infantil" element={<FutbolInfantil />} />
            <Route path="/futbol-veterano" element={<FutbolVeterano />} />
            <Route path="/voley" element={<Voley />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/indumentaria" element={<Indumentaria />} />
            <Route path="/barra-pesquera" element={<BarraPesquera />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/calendarios" element={<Calendarios />} />
            <Route path="/socios" element={<SociosLogin />} />
            <Route path="/socios/login" element={<SociosLogin />} />
            <Route path="/socios/dashboard" element={<SociosDashboard />} />
            <Route path="/cuota-social" element={<CuotaSocial />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
