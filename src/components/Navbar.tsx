import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-slate-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black text-blue-700 hover:text-blue-800 transition-colors">
            Tashi
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex gap-8 font-semibold text-slate-800">
              <li>
                <Link
                  to="/"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/about')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/services')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/portfolio')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/experience')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`pb-2 transition-all duration-200 ${
                    isActive('/contact')
                      ? 'text-blue-700 border-b-2 border-yellow-500'
                      : 'hover:text-blue-600'
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-slate-200 border-t border-slate-300">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/about')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/services')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/portfolio')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/experience')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive('/contact')
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
