import React, { useState } from 'react';
import peliculasIniciales from '../data/moviesData.json';
import styles from './Catalogo.module.css';

export default function Catalogo() {
  const [filtroActivo, setFiltroActivo] = useState('TODAS');
  const [peliculas, setPeliculas] = useState(peliculasIniciales);

  const filtros = ['TODAS', 'POPULARES', 'NUEVAS', 'CALIFICACIÓN', 'AÑO', 'GÉNERO'];

  const handleCargarMas = () => {
    const masPeliculas = peliculasIniciales.map((peli) => ({
      ...peli,
      id: peli.id + peliculas.length,
    }));
    setPeliculas((prev) => [...prev, ...masPeliculas]);
  };

  return (
    <section className={styles.contenedor}>
      
      {/* 1. Sub-Navbar de Filtros */}
      <div className={styles.filtrosContenedor}>
        {filtros.map((filtro) => (
          <button
            key={filtro}
            onClick={() => setFiltroActivo(filtro)}
            className={`${styles.filtroBtn} ${filtroActivo === filtro ? styles.filtroBtnActivo : ''}`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* 2. Encabezado de la Sección */}
      <div className={styles.headerSeccion}>
        <h1 className={styles.titulo}>Catálogo</h1>
        <p className={styles.subtitulo}>Explora películas y series</p>
      </div>

      {/* 3. Grid de Películas */}
      <div className={styles.gridPeliculas}>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className={styles.tarjeta}>
            <img
              src={pelicula.portada}
              alt={pelicula.titulo}
              className={styles.imagenPeli}
            />

            <div className={styles.overlay}>
              {/* Etiqueta Superior */}
              <div className={styles.infoSuperior}>
                <span className={styles.badgeGenero}>
                  {pelicula.genero}
                </span>
                <div className={styles.calificacionContainer}>
                  <span>{pelicula.calificacion}</span>
                  <span className={styles.estrella}>★</span>
                </div>
              </div>

              {/* Información Inferior */}
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

      {/* 4. Botón de Cargar más */}
      <div className={styles.cargarMasContenedor}>
        <button onClick={handleCargarMas} className={styles.cargarMasBtn}>
          Cargar más películas...
        </button>
      </div>

    </section>
  );
}