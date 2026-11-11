
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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

      {/* Menú ordenador */}
      <nav className="hidden md:flex space-x-8 text-sm font-semibold italic text-slate-300">
        <Link to="/" className="hover:text-red-500 transition-colors">
          Inicio
        </Link>

        <Link to="/" className="hover:text-red-500 transition-colors">
          Catálogo
        </Link>

        <Link to="/add-movie" className="hover:text-red-500 transition-colors">
          Formulario
        </Link>

        <a href="#ubicacion" className="hover:text-red-500 transition-colors">
          Ubicación
        </a>
      </nav>

      {/* Botón móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden text-white text-2xl"
        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      {/* Menú móvil */}
      {menuAbierto && (
        <nav className="absolute top-full left-0 w-full flex flex-col bg-[#0a0f1d] border-b border-slate-800 md:hidden">
          <Link to="/" onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 text-slate-300 hover:text-red-500">
            Inicio
          </Link>

          <Link to="/" onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 text-slate-300 hover:text-red-500">
            Catálogo
          </Link>

          <Link to="/add-movie" onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 text-slate-300 hover:text-red-500">
            Formulario
          </Link>

          <a href="#ubicacion" onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 text-slate-300 hover:text-red-500">
            Ubicación
          </a>
        </nav>
      )}
    </header>
  );
}
