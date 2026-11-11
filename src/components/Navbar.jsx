
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-4 md:px-8 py-4 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white border-2 border-red-400 shadow-lg shadow-red-600/50">
          🐉
        </div>

        <span className="font-bold text-xl tracking-wider text-white">
          ACCION
          <span className="text-xs text-red-500 block -mt-1 font-normal">
            VIDEOCLUB
          </span>
        </span>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-8 text-sm font-semibold italic text-slate-300">
        <Link to="/" className="hover:text-red-500 transition-colors">
          Inicio
        </Link>

        <Link to="/catalogo" className="hover:text-red-500 transition-colors">
          Catálogo
        </Link>

        <Link to="/add-movie" className="hover:text-red-500 transition-colors">
          Formulario
        </Link>

        <Link to="/ubicacion" className="hover:text-red-500 transition-colors">
          Ubicación
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white text-2xl"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Animated mobile menu */}
      <nav
        className={`absolute top-full left-0 w-full flex flex-col bg-[#0a0f1d] border-b border-slate-800 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-64 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="px-6 py-4 text-slate-300 hover:text-red-500 transition-colors"
        >
          Inicio
        </Link>

        <Link
          to="/catalogo"
          onClick={() => setIsMenuOpen(false)}
          className="px-6 py-4 text-slate-300 hover:text-red-500 transition-colors"
        >
          Catálogo
        </Link>

        <Link
          to="/add-movie"
          onClick={() => setIsMenuOpen(false)}
          className="px-6 py-4 text-slate-300 hover:text-red-500 transition-colors"
        >
          Formulario
        </Link>

        <Link
          to="/ubicacion"
          onClick={() => setIsMenuOpen(false)}
          className="px-6 py-4 text-slate-300 hover:text-red-500 transition-colors"
        >
          Ubicación
        </Link>
      </nav>
    </header>
  );
}
