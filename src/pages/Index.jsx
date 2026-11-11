import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const peliculasIniciales = [
  {
    id: 1,
    titulo: 'Shelter: El Protector',
    categoria: 'Acción',
    desc: 'Un ex-agente debe proteger a una joven de una red criminal.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.OYY8WxeAxs4rgoCAtqHn0wHaKl%3Fr%3D0%26pid%3DApi&f=1&ipt=30ed885897a7ed4447b7b9c14815070dee4af39ff09506670dee9b5d28b0d312&ipo=images',
  },
  {
    id: 2,
    titulo: 'Venom',
    categoria: 'Ciencia Ficción / Acción',
    desc: 'Un periodista entra en contacto con un simbionte alienígena.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.YmwOe4TidzpeQeEyfmq8OwHaKq%3Fr%3D0%26pid%3DApi&f=1&ipt=1c82dbf8f39f0f8f1a0edd90de4be37fa9d24004aa4d55a7d595d8519d9a333d&ipo=images',
  },
  {
    id: 3,
    titulo: 'The Dark Knight',
    categoria: 'Acción / Drama',
    desc: 'Batman se enfrenta al Joker para salvar Gotham.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.C58MrUTynA5UG12vuT_jwwHaLH%3Fr%3D0%26pid%3DApi&f=1&ipt=91b401b3085f1d53e7cdcc72209108753d6715b6ed8d2c432ee618d8f33ce76e&ipo=images',
  },
];

function GridPeliculas({ peliculas, onSeleccionar }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {peliculas.map((pelicula) => (
        <button
          key={pelicula.id}
          type="button"
          className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left transition hover:border-red-500"
          onClick={() => onSeleccionar(pelicula)}
        >
          <img
            src={pelicula.img}
            alt={pelicula.titulo}
            className="h-64 w-full object-cover"
          />
          <span className="block p-4 text-lg font-semibold text-white">
            {pelicula.titulo}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Index() {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  return (
    <PageLayout
      title="Fantasía Videoclub"
      description="Explora películas, descubre tus próximos favoritos y disfruta de nuestra selección de acción y otros géneros."
    >
      <div className="mb-8 flex justify-center">
          <Link
            to="/catalogo"
            className="inline-flex rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Explorar catálogo
          </Link>
      </div>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Estrenos destacados</h2>
        <p className="mb-6 text-slate-400">
          Selección de películas para empezar a explorar.
        </p>
        <GridPeliculas
          peliculas={peliculasIniciales.slice(0, 3)}
          onSeleccionar={setPeliculaSeleccionada}
        />
      </section>

      {peliculaSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setPeliculaSeleccionada(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="pelicula-titulo"
            className="w-full max-w-lg rounded-xl border border-slate-700 bg-[#111827] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="pelicula-titulo" className="text-2xl font-bold">
              {peliculaSeleccionada.titulo}
            </h2>
            <p className="mt-4 text-slate-300">
              <strong>Categoría:</strong> {peliculaSeleccionada.categoria}
            </p>
            <p className="mt-2 text-slate-400">{peliculaSeleccionada.desc}</p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
              onClick={() => setPeliculaSeleccionada(null)}
            >
              Cerrar
            </button>
          </section>
        </div>
      )}
    </PageLayout>
  );
}
