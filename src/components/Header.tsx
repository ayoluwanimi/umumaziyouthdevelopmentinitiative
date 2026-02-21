import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSiteContext } from '../context/SiteContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSiteContext();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About UMYIDI', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {settings.logo ? (
              <img
                src={settings.logo}
                alt={settings.siteName}
                className="w-14 h-14 rounded-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2e7d32] flex items-center justify-center overflow-hidden ${settings.logo ? 'hidden' : ''}`}>
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <circle cx="50" cy="50" r="45" fill="#1e3a5f"/>
                <path d="M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z" fill="#f7941d"/>
                <circle cx="50" cy="50" r="15" fill="#2e7d32"/>
                <path d="M45 50 L50 40 L55 50 L50 60 Z" fill="white"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#1e3a5f] leading-tight">{settings.siteName}</h1>
              <p className="text-xs text-gray-600 leading-tight">{settings.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#1e3a5f] text-white'
                    : 'text-gray-700 hover:bg-[#1e3a5f]/10 hover:text-[#1e3a5f]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-4 px-6 py-2.5 bg-[#f7941d] text-white rounded-md font-semibold hover:bg-[#e8850f] transition-colors shadow-lg"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1e3a5f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#1e3a5f] text-white'
                    : 'text-gray-700 hover:bg-[#1e3a5f]/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-3 bg-[#f7941d] text-white text-center rounded-md font-semibold"
            >
              Donate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
