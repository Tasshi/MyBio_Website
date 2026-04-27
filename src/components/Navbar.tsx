import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black text-blue-700">
            Tashi
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-8 font-semibold text-slate-800">
            <li>
              <Link
                to="/"
                className={`pb-2 transition-all ${
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
                className={`pb-2 transition-all ${
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
                className={`pb-2 transition-all ${
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
                className={`pb-2 transition-all ${
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
                className={`pb-2 transition-all ${
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
                className={`pb-2 transition-all ${
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
      </div>
    </nav>
  );
}
