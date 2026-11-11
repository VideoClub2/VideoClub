import { useState } from 'react';
import './App.css';
import { useState } from 'react';
import './App.css';

// Importa tus imágenes aquí arriba (reemplaza los nombres por los reales que tengas en assets)
import shelterImg from './assets/shelter.png';
import venomImg from './assets/venom.png';
import batmanImg from './assets/batman.png';
import tombImg from './assets/tombraider.png';

const peliculasIniciales = [
  { id: 1, titulo: 'Shelter: El Protector', categoria: 'Acción', desc: 'Un ex-agente debe proteger a una joven de una red criminal.', img: 'https://via.placeholder.com/200x300/1e293b/ffffff?text=Shelter' },
  { id: 2, titulo: 'Venom', categoria: 'Ciencia Ficción / Acción', desc: 'Un periodista entra en contacto con un simbionte alienígena.', img: 'https://via.placeholder.com/200x300/1e293b/ffffff?text=Venom' },
  { id: 3, titulo: 'The Dark Knight', categoria: 'Acción / Drama', desc: 'Batman se enfrenta al Joker para salvar Gotham.', img: 'https://via.placeholder.com/200x300/1e293b/ffffff?text=The+Dark+Knight' },
  { id: 4, titulo: 'Tomb Raider', categoria: 'Aventura / Acción', desc: 'Lara Croft se embarca en una peligrosa expedición a una isla misteriosa.', img: 'https://via.placeholder.com/200x300/1e293b/ffffff?text=Tomb+Raider' }
];

export default function App() {
  const [pestanaActiva, setPestanaActiva] = useState('inicio');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  return (
    <div className="app-container">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <button 
          className={pestanaActiva === 'inicio' ? 'active' : ''} 
          onClick={() => setPestanaActiva('inicio')}
        >
          Inicio
        </button>
        <button 
          className={pestanaActiva === 'catalogo' ? 'active' : ''} 
          onClick={() => setPestanaActiva('catalogo')}
        >
          Catálogo
        </button>
        <button 
          className={pestanaActiva === 'formulario' ? 'active' : ''} 
          onClick={() => setPestanaActiva('formulario')}
        >
          Formulario
        </button>
        <button 
          className={pestanaActiva === 'ubicacion' ? 'active' : ''} 
          onClick={() => setPestanaActiva('ubicacion')}
        >
          Ubicación
        </button>
      </nav>

      {/* Secciones según la pestaña seleccionada */}
      <main className="content">
        {pestanaActiva === 'inicio' && (
          <section className="seccion">
            <h2>Fantasía Videoclub</h2>
            <p>
              Plataforma web dedicada al cine de acción y sus diferentes subgéneros. 
              Explora películas, consulta sus detalles y gestiona el catálogo.
            </p>
            <h3>Estrenos</h3>
            <div className="grid-peliculas">
              {peliculasIniciales.slice(0, 3).map((pelicula) => (
                <div key={pelicula.id} className="card-pelicula" onClick={() => setPeliculaSeleccionada(pelicula)}>
                  <img src={pelicula.img} alt={pelicula.titulo} />
                  <h4>{pelicula.titulo}</h4>
                </div>
              ))}
            </div>
          </section>
        )}

        {pestanaActiva === 'catalogo' && (
          <section className="seccion">
            <h2>Catálogo Completo</h2>
            <div className="grid-peliculas">
              {peliculasIniciales.map((pelicula) => (
                <div key={pelicula.id} className="card-pelicula" onClick={() => setPeliculaSeleccionada(pelicula)}>
                  <img src={pelicula.img} alt={pelicula.titulo} />
                  <h4>{pelicula.titulo}</h4>
                </div>
              ))}
            </div>
          </section>
        )}

        {pestanaActiva === 'formulario' && (
          <section className="seccion">
            <h2>Contacto / Alquiler</h2>
            <form onSubmit={(e) => e.preventDefault()} className="formulario">
              <input type="text" placeholder="Tu Nombre" required />
              <input type="email" placeholder="Correo Electrónico" required />
              <textarea placeholder="Mensaje o película a solicitar..."></textarea>
              <button type="submit">Enviar</button>
            </form>
          </section>
        )}

        {pestanaActiva === 'ubicacion' && (
          <section className="seccion">
            <h2>Ubicación</h2>
            <p>Encuéntranos en la tienda principal o contáctanos en redes sociales.</p>
          </section>
        )}
      </main>

      {/* Ventana Modal de Detalles al hacer clic en una película */}
      {peliculaSeleccionada && (
        <div className="modal-overlay" onClick={() => setPeliculaSeleccionada(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{peliculaSeleccionada.titulo}</h3>
            <p><strong>Categoría:</strong> {peliculaSeleccionada.categoria}</p>
            <p>{peliculaSeleccionada.desc}</p>
            <button onClick={() => setPeliculaSeleccionada(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}