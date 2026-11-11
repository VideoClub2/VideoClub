import React from 'react';

export default function Navbar({ vistaActiva, setVistaActiva }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      {/* Logo */}
      <div 
        className="flex items-center space-x-3 cursor-pointer" 
        onClick={() => setVistaActiva('catalogo')}
      >
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white border-2 border-red-400 shadow-lg shadow-red-600/50">
          🐉
        </div>
        <span className="font-bold text-xl tracking-wider text-white">
          ACCION <span className="text-xs text-red-500 block -mt-1 font-normal">VIDEOCLUB</span>
        </span>
      </div>

      {/* Menú de Navegación completo */}
      <nav className="hidden md:flex space-x-8 text-sm font-semibold italic text-slate-300">
        
        {/* Opción Inicio (Pendiente de tu compañero) */}
        <button
          onClick={() => setVistaActiva('inicio')}
          className={`transition-colors cursor-pointer ${
            vistaActiva === 'inicio' ? 'text-red-500 font-bold border-b-2 border-red-500 pb-1' : 'hover:text-red-500'
          }`}
        >
          Inicio
        </button>

        {/* Tu sección 1: Catálogo */}
        <button
          onClick={() => setVistaActiva('catalogo')}
          className={`transition-colors cursor-pointer ${
            vistaActiva === 'catalogo' ? 'text-red-500 font-bold border-b-2 border-red-500 pb-1' : 'hover:text-red-500'
          }`}
        >
          Catálogo
        </button>

        {/* Opción Formulario (Pendiente de tu compañero) */}
        <button
          onClick={() => setVistaActiva('formulario')}
          className={`transition-colors cursor-pointer ${
            vistaActiva === 'formulario' ? 'text-red-500 font-bold border-b-2 border-red-500 pb-1' : 'hover:text-red-500'
          }`}
        >
          Formulario
        </button>

        {/* Tu sección 2: Ubicación */}
        <button
          onClick={() => setVistaActiva('ubicacion')}
          className={`transition-colors cursor-pointer ${
            vistaActiva === 'ubicacion' ? 'text-red-500 font-bold border-b-2 border-red-500 pb-1' : 'hover:text-red-500'
          }`}
        >
          Ubicación
        </button>

      </nav>
    </header>
  );
}