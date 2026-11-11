import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Ubicacion from './pages/Ubicacion';
import AddMovie from './pages/AddMovie';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.appContenedor}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/catalogo" replace />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
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
