import { useState } from 'react';
import peliculasTotales from '../data/moviesData.json'; // Todas tus 20+ películas
import styles from '../components/Catalogo.module.css';

export default function Catalogo() {
  const [filtroActivo, setFiltroActivo] = useState('TODAS');
  
  // Estado para llevar la lista completa de películas filtradas/ordenadas
  const [peliculas, setPeliculas] = useState(peliculasTotales);
  
  // 1. Estado para controlar cuántas películas se muestran visiblemente (ej. empezamos mostrando 6 o 9)
  const [limiteVisible, setLimiteVisible] = useState(9);

  const filtros = ['TODAS', 'POPULARES', 'NUEVAS', 'CALIFICACIÓN', 'AÑO', 'GÉNERO'];

  // Función para ordenar las películas
  const handleFiltroClick = (filtro) => {
    setFiltroActivo(filtro);
    setLimiteVisible(6); // Reseteamos la vista al cambiar de filtro

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

  // 2. Función para mostrar más películas del JSON sin repetir
  const handleCargarMas = () => {
    // Aumentamos el límite visible en 6 más (o el número que prefieras)
    setLimiteVisible((prevLimite) => prevLimite + 9);
  };

  // 3. Cortamos el arreglo para mostrar únicamente desde la primera hasta el límite actual
  const peliculasVisibles = peliculas.slice(0, limiteVisible);

  return (
    <section className={styles.contenedor}>
      
      {/* 1. Sub-Navbar de Filtros */}
      <div className={styles.filtrosContenedor}>
        {filtros.map((filtro) => (
          <button
            key={filtro}
            onClick={() => handleFiltroClick(filtro)}
            className={`${styles.filtroBtn} ${filtroActivo === filtro ? styles.filtroBtnActivo : ''}`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* 2. Encabezado */}
      <div className={styles.headerSeccion}>
        <h1 className={styles.titulo}>Catálogo</h1>
        <p className={styles.subtitulo}>
          Explora películas y series {filtroActivo !== 'TODAS' && `• Ordenado por: ${filtroActivo}`}
        </p>
      </div>

      {/* 3. Grid de Películas (Mostramos solo las cortadas por 'peliculasVisibles') */}
      <div className={styles.gridPeliculas}>
        {peliculasVisibles.map((pelicula) => (
          <div key={pelicula.id} className={styles.tarjeta}>
            <img
              src={pelicula.portada}
              alt={pelicula.titulo}
              className={styles.imagenPeli}
            />

            <div className={styles.overlay}>
              <div className={styles.infoSuperior}>
                <span className={styles.badgeGenero}>
                  {pelicula.genero}
                </span>
                <div className={styles.calificacionContainer}>
                  <span>{pelicula.calificacion}</span>
                  <span className={styles.estrella}>★</span>
                </div>
              </div>

              <div className={styles.infoInferior}>
                <span className={styles.anio}>
                  {pelicula.anio}
                </span>
                <h3 className={styles.tituloPeli}>
                  {pelicula.titulo}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Botón de Cargar más (Se oculta si ya se muestran todas las películas del JSON) */}
      {limiteVisible < peliculas.length && (
        <div className={styles.cargarMasContenedor}>
          <button onClick={handleCargarMas} className={styles.cargarMasBtn}>
            Cargar más películas...
          </button>
        </div>
      )}

    </section>
  );
}