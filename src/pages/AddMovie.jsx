
import React from 'react';
import MovieForm from '../components/MovieForm';

export default function AddMovie() {
  return (
    <div className="min-h-screen bg-[#080d19] text-white px-4 py-10 md:px-8">

      {/* Page heading */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Añade tu película
        </h1>

        <p className="text-slate-400 mt-3">
          Incorpora una nueva película a nuestro videoclub.
        </p>
      </div>

      {/* Form container */}
      <section className="max-w-4xl mx-auto bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-10">

        <MovieForm />

      </section>

    </div>
  );
}
