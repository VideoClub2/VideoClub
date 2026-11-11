import React, { useState } from 'react';

export default function MovieForm() {
    const [formData, setFormData] = useState({
        titulo: '',
        genero: '',
        calificacion: '',
        anio: '',
        portada: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaPelicula = {
            ...formData,
            calificacion: Number(formData.calificacion),
            anio: Number(formData.anio)
        };

        console.log('Nueva película:', nuevaPelicula);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Movie title */}
            <div className="flex flex-col gap-2">
                <label htmlFor="titulo" className="font-semibold text-white">
                    Título de la película
                </label>

                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    required
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
                    value={formData.genero}
                    onChange={handleChange}
                    required
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
                    value={formData.calificacion}
                    onChange={handleChange}
                    required
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
                    required
                    value={formData.anio}
                    onChange={handleChange}
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
                    value={formData.portada}
                    onChange={handleChange}
                    required
                    placeholder="https://..."
                    className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>

            {/* Form buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <button
                    type="submit"
                    className="flex-1 rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition-colors hover:bg-red-700"
                >
                    Añadir película
                </button>

                <button
                    type="reset"
                    className="flex-1 rounded-lg border border-slate-600 px-6 py-3 font-bold text-slate-300 transition-colors hover:bg-slate-700"
                >
                    Limpiar formulario
                </button>

            </div>

        </form>
    );
}
