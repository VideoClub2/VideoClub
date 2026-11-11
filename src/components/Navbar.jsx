import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white border-2 border-red-400 shadow-lg shadow-red-600/50">
          🐉
        </div>
        <span className="font-bold text-xl tracking-wider text-white">
          ACCION <span className="text-xs text-red-500 block -mt-1 font-normal">VIDEOCLUB</span>
        </span>
      </div>

      {/* Navegación principal */}
      <nav className="hidden md:flex space-x-8 text-sm font-semibold italic text-slate-300">
        <a href="#inicio" className="hover:text-red-500 transition-colors">Inicio</a>
        <a href="#catalogo" className="text-white border-b-2 border-red-500 pb-1">Catálogo</a>
        <a href="#formulario" className="hover:text-red-500 transition-colors">Formulario</a>
        <a href="#ubicacion" className="hover:text-red-500 transition-colors">Ubicación</a>
      </nav>
    </header>
  );
}