import { useState } from 'react';
import './App.css';
import heroImg from './assets/hero.png';
import venomImg from './assets/venom.png';

const peliculasIniciales = [
  { 
    id: 1, 
    titulo: 'Shelter: El Protector', 
    categoria: 'Acción', 
    desc: 'Un ex-agente debe proteger a una joven de una red criminal.', 
    img: heroImg 
  },
  { 
    id: 2, 
    titulo: 'Venom', 
    categoria: 'Ciencia Ficción / Acción', 
    desc: 'Un periodista entra en contacto con un simbionte alienígena.', 
    img: 'https://www.google.com/imgres?q=venom&imgurl=https%3A%2F%2Fes.web.img3.acsta.net%2Fpictures%2F18%2F09%2F18%2F16%2F30%2F4389164.jpg&imgrefurl=https%3A%2F%2Fwww.sensacine.com%2Fpeliculas%2Fpelicula-138473%2F&docid=zx_Kl8JWUFuWhM&tbnid=TNQUdI-ZimBcWM&vet=12ahUKEwjK6qW53_-XAxXG2QIHHYhTNOIQnPAOegQIPRAA..i&w=1200&h=1729&hcb=2&ved=2ahUKEwjK6qW53_-XAxXG2QIHHYhTNOIQnPAOegQIPRAA' 
  },
  { 
    id: 3, 
    titulo: 'The Dark Knight', 
    categoria: 'Acción / Drama', 
    desc: 'Batman se enfrenta al Joker para salvar Gotham.', 
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    titulo: 'Tomb Raider', 
    categoria: 'Aventura / Acción', 
    desc: 'Lara Croft se embarca en una peligrosa expedición a una isla misteriosa.', 
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80' 
  }
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
    <div className="app-container">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <button 
          className={pestanaActiva === 'inicio' ? 'active' : ''} 
          onClick={() => setPestanaActiva('inicio')}
        >
          Inicio
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
      )}
    </div>
  );
}