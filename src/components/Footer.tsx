import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useSiteContext } from '../context/SiteContext';

export function Footer() {
  const { settings } = useSiteContext();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {settings.logo ? (
                <img
                  src={settings.logo}
                  alt={settings.siteName}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${settings.logo ? 'hidden' : ''}`}>
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="45" fill="#1e3a5f"/>
                  <path d="M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z" fill="#f7941d"/>
                  <circle cx="50" cy="50" r="15" fill="#2e7d32"/>
                  <path d="M45 50 L50 40 L55 50 L50 60 Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">{settings.siteName}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {settings.tagline} is dedicated to empowering youth and transforming communities through education, skill development, and sustainable programs.
            </p>
            <div className="flex space-x-3">
              <a href={settings.facebookUrl || '#'} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href={settings.twitterUrl || '#'} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href={settings.instagramUrl || '#'} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href={settings.linkedinUrl || '#'} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#f7941d]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">About UMYIDI</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">Community</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-[#f7941d] transition-colors text-sm">Donate</Link></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#f7941d]">Our Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">Youth Empowerment</span></li>
              <li><span className="text-gray-300 text-sm">Education Support</span></li>
              <li><span className="text-gray-300 text-sm">Skills Training</span></li>
              <li><span className="text-gray-300 text-sm">Community Development</span></li>
              <li><span className="text-gray-300 text-sm">Health & Wellness</span></li>
              <li><span className="text-gray-300 text-sm">Environmental Conservation</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#f7941d]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#f7941d] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{settings.contactAddress}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#f7941d] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{settings.contactPhone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#f7941d] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{settings.contactEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {settings.tagline}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#f7941d] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#f7941d] text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
