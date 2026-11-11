import React from 'react';
import styles from './Ubicacion.module.css';

export default function Ubicacion() {
  return (
    <section id="ubicacion" className={styles.contenedor}>
      
      {/* Encabezado */}
      <div className={styles.headerSeccion}>
        <h1 className={styles.titulo}>Nuestra Ubicación</h1>
        <p className={styles.subtitulo}>
          Ven a visitarnos, descubre nuestros estrenos en físico y vive la mejor experiencia de cine.
        </p>
      </div>

      {/* Contenido principal en Grid */}
      <div className={styles.gridUbicacion}>
        
        {/* Información y Horarios */}
        <div className={styles.infoCard}>
          <div className={styles.infoItem}>
            <div className={styles.iconoBox}>📍</div>
            <div>
              <h3 className={styles.infoTitulo}>Dirección Principal</h3>
              <p className={styles.infoTexto}>Av. Principal del Cine #452, Local 3<br />Ciudad de la Ficción, CP 44100</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconoBox}>🕒</div>
            <div>
              <h3 className={styles.infoTitulo}>Horarios de Atención</h3>
              <p className={styles.infoTexto}>Lunes a Viernes: 10:00 AM - 10:00 PM<br />Sábados y Domingos: 12:00 PM - 11:30 PM</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconoBox}>📞</div>
            <div>
              <h3 className={styles.infoTitulo}>Contacto Directo</h3>
              <p className={styles.infoTexto}>Teléfono: +34 900 555 333<br />Email: contacto@fantasiavideoclub.com</p>
            </div>
          </div>
        </div>

        {/* Mapa Interactivo (Simulado con un iframe de mapa oscuro y estilizado) */}
        <div className={styles.mapaContainer}>
          <iframe
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846819!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1ses!2sus!4v1625000000000!5m2!1ses!2sus"
            allowFullScreen=""
            loading="lazy"
            className={styles.mapaIframe}
          ></iframe>

          {/* Tarjeta flotante dentro del mapa */}
          <div className={styles.mapaOverlayInfo}>
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">Sucursal Central</span>
              <h4 className="text-sm font-bold text-white">Fantasía Videoclub Store</h4>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-red-600/30"
            >
              Cómo llegar
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}