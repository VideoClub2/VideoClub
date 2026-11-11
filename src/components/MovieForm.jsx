
import React from 'react';

export default function MovieForm() {
  return (
    <form className="flex flex-col gap-6">

      {/* Movie title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="titulo" className="font-semibold text-white">
          Título de la película
        </label>

        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Ej. Interstellar"
          className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Genre */}
      <div className="flex flex-col gap-2">
        <label htmlFor="genero" className="font-semibold text-white">
          Género
        </label>

        <select
          id="genero"
          name="genero"
          defaultValue=""
          className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>Selecciona un género</option>
          <option value="ACCIÓN">Acción</option>
          <option value="DRAMA">Drama</option>
          <option value="CIENCIA">Ciencia</option>
          <option value="COMEDIA">Comedia</option>
          <option value="SUSPENSO">Suspenso</option>
          <option value="ROMANCE">Romance</option>
        </select>
      </div>

      {/* Rating */}
      <div className="flex flex-col gap-2">
        <label htmlFor="calificacion" className="font-semibold text-white">
          Calificación
        </label>

        <input
          type="number"
          id="calificacion"
          name="calificacion"
          min="0"
          max="5"
          step="0.1"
          placeholder="Ej. 4.8"
          className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Release year */}
      <div className="flex flex-col gap-2">
        <label htmlFor="anio" className="font-semibold text-white">
          Año de estreno
        </label>

        <input
          type="number"
          id="anio"
          name="anio"
          min="1888"
          placeholder="Ej. 2024"
          className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Poster */}
      <div className="flex flex-col gap-2">
        <label htmlFor="portada" className="font-semibold text-white">
          URL de la portada
        </label>

        <input
          type="url"
          id="portada"
          name="portada"
          placeholder="https://..."
          className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

    </form>
  );
}
