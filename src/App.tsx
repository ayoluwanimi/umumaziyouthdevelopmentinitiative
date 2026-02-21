import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Community } from './pages/Community';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';
import { Admin } from './pages/Admin';

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  if (isAdminPage) {
    return <Admin />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </Router>
    </SiteProvider>
  );
}
