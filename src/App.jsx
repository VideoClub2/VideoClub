import React from 'react';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appContenedor}>
      {/* Navbar General */}
      <Navbar />

      {/* Sección principal del catálogo */}
      <main>
        <Catalogo />
      </main>

      {/* Footer */}
      <footer className={styles.appFooter}>
        <p>© Fantasía Videoclub. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}