import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import Ubicacion from './components/Ubicacion';
import styles from './App.module.css';

export default function App() {
  // Estado para controlar qué sección está visible actualmente
  const [vistaActiva, setVistaActiva] = useState('catalogo');

  return (
    <div className={styles.appContenedor}>
      {/* Pasamos el estado y la función al Navbar */}
      <Navbar vistaActiva={vistaActiva} setVistaActiva={setVistaActiva} />

      <main>
        {/* Muestra únicamente el Catálogo cuando la vista es 'catalogo' */}
        {vistaActiva === 'catalogo' && <Catalogo />}

        {/* Muestra únicamente la Ubicación cuando la vista es 'ubicacion' */}
        {vistaActiva === 'ubicacion' && <Ubicacion />}
      </main>

      <footer className={styles.appFooter}>
        <p>© Fantasía Videoclub. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}