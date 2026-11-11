import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import Ubicacion from './components/Ubicacion';
import AddMovie from './pages/AddMovie';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.appContenedor}>
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Catalogo />
                  <Ubicacion />
                </>
              }
            />
            <Route path="/add-movie" element={<AddMovie />} />
          </Routes>
        </main>

        <footer className={styles.appFooter}>
          <p>© Fantasía Videoclub. Todos los derechos reservados.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
