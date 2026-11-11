import axios from 'axios';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';

const MOVIES_API_URL = 'http://localhost:3000/movies';

export default function Catalogo() {
  const [filtroActivo, setFiltroActivo] = useState('TODAS');
  const [peliculasTotales, setPeliculasTotales] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [limiteVisible, setLimiteVisible] = useState(9);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState(false);
  const [intentoCarga, setIntentoCarga] = useState(0);

  const filtros = ['TODAS', 'POPULARES', 'NUEVAS', 'CALIFICACIÓN', 'AÑO', 'GÉNERO'];

  useEffect(() => {
    const controller = new AbortController();

    const cargarPeliculas = async () => {
      setCargando(true);
      setErrorCarga(false);

      try {
        const { data } = await axios.get(MOVIES_API_URL, {
          signal: controller.signal,
        });

        if (!Array.isArray(data)) {
          throw new Error('La respuesta del servidor no contiene una lista de películas.');
        }

        setPeliculasTotales(data);
        setPeliculas(data);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Error al cargar las películas:', error);
          setErrorCarga(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    };

    cargarPeliculas();
    return () => controller.abort();
  }, [intentoCarga]);

  const handleFiltroClick = (filtro) => {
    setFiltroActivo(filtro);
    setLimiteVisible(6);

    let peliculasOrdenadas = [...peliculasTotales];

    switch (filtro) {
      case 'POPULARES':
      case 'CALIFICACIÓN':
        peliculasOrdenadas.sort((a, b) => b.calificacion - a.calificacion);
        break;
      case 'NUEVAS':
        peliculasOrdenadas.sort((a, b) => b.anio - a.anio);
        break;
      case 'AÑO':
        peliculasOrdenadas.sort((a, b) => a.anio - b.anio);
        break;
      case 'GÉNERO':
        peliculasOrdenadas.sort((a, b) => a.genero.localeCompare(b.genero));
        break;
      case 'TODAS':
      default:
        peliculasOrdenadas = [...peliculasTotales];
        break;
    }

    setPeliculas(peliculasOrdenadas);
  };

  const handleCargarMas = () => {
    setLimiteVisible((prevLimite) => prevLimite + 9);
  };

  const peliculasVisibles = peliculas.slice(0, limiteVisible);

  return (
    <PageLayout
      title="Catálogo"
      description={`Explora películas y series${filtroActivo !== 'TODAS' ? ` • Ordenado por: ${filtroActivo}` : ''}`}
    >
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filtros.map((filtro) => (
          <button
            key={filtro}
            type="button"
            onClick={() => handleFiltroClick(filtro)}
            disabled={cargando || errorCarga}
            className={`cursor-pointer rounded-full border px-5 py-1.5 text-xs font-bold transition-all duration-200 ${
              filtroActivo === filtro
                ? 'border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'border-slate-700 bg-transparent text-slate-300 hover:border-red-500'
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {cargando && (
        <p role="status" className="text-center text-slate-400">
          Cargando películas...
        </p>
      )}

      {errorCarga && (
        <div role="alert" className="text-center">
          <p className="text-red-300">
            No se pudieron cargar las películas. Comprueba que el servidor de
            datos está iniciado.
          </p>
          <button
            type="button"
            onClick={() => setIntentoCarga((intento) => intento + 1)}
            className="mt-4 rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Reintentar
          </button>
        </div>
      )}

      {!cargando && !errorCarga && peliculas.length === 0 && (
        <p className="text-center text-slate-400">
          Todavía no hay películas en el catálogo.
        </p>
      )}

      {!cargando && !errorCarga && peliculas.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {peliculasVisibles.map((pelicula) => (
              <div
                key={pelicula.id}
                className="group relative h-[360px] overflow-hidden rounded-2xl border border-slate-700 bg-[#080d19] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-500"
              >
                <img
                  src={pelicula.portada}
                  alt={pelicula.titulo}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/30 to-black/60 p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white px-3 py-1 text-[10px] font-extrabold tracking-wider text-black">
                      {pelicula.genero}
                    </span>
                    <div className="flex items-center space-x-1 text-xs font-bold text-white drop-shadow-md">
                      <span>{pelicula.calificacion}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-xs font-medium text-slate-300">
                      {pelicula.anio}
                    </span>
                    <h3 className="text-xl font-black leading-tight text-white drop-shadow-md">
                      {pelicula.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {limiteVisible < peliculas.length && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={handleCargarMas}
                className="cursor-pointer rounded-lg border border-slate-700 bg-[#080d19] px-6 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-red-500 hover:bg-slate-800"
              >
                Cargar más películas...
              </button>
            </div>
          )}
        </>
      )}
    </PageLayout>
  );
}