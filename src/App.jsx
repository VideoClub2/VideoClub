
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import AddMovie from './pages/AddMovie';

import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.appContenedor}>
        {/* Navbar General */}
        <Navbar />

        {/* Contenido según la ruta */}
        <main>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/add-movie" element={<AddMovie />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={styles.appFooter}>
          <p>© Fantasía Videoclub. Todos los derechos reservados.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
