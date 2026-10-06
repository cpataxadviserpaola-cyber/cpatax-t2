import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import TaxSeason from './pages/TaxSeason.jsx';
import Industries from './pages/Industries.jsx';
import Resources from './pages/Resources.jsx';
import FinancialPlanning from './pages/FinancialPlanning.jsx';
import Privacy from './pages/Privacy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import NotFound from './pages/NotFound.jsx';
import { services } from './data/services.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        {services
          .filter((service) => service.slug)
          .map((service) => (
            <Route key={service.id} path={service.slug} element={<ServiceDetail id={service.id} />} />
          ))}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tax-season" element={<TaxSeason />} />
        {/* The Tax Season page used to be called the Client Center. */}
        <Route path="client-center" element={<Navigate to="/tax-season" replace />} />
        <Route path="industries" element={<Industries />} />
        <Route path="resources" element={<Resources />} />
        <Route path="financial-planning" element={<FinancialPlanning />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
