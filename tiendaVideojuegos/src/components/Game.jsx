import React from 'react';
import { useImagen } from "./context/ImagenContext";
import { Link } from 'react-router-dom'; // Importa Link
import "../assets/css/galeria.css";
import '../assets/css/boton.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Games() {
  const { games, gameSelect, setGameSelected } = useImagen();

  // Función para manejar el cambio de favoritos
  const toggleFavorito = (id) => {
    if (gameSelect.includes(id)) {
      // Si ya es favorito, quitarlo de la lista de favoritos
      setGameSelected(gameSelect.filter((favId) => favId !== id));
    } else {
      // Si no es favorito, agregarlo a la lista de favoritos
      setGameSelected([...gameSelect, id]);
    }
  };

  return (
    <>
    <div className="reg-title d-flex justify-content-center">
                    <h3>Lista de Productos</h3>
    </div>

    <div className="galeria">
      {games.map((game) => (
        <div className="galeria grid-columns-5 p-3 imagen-container" key={game.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={game.urlimagen} style={{ maxWidth: '100%', height: 'auto' }} />
            <Card.Body>
              <Card.Title>{game.nombre}</Card.Title>
              <Button
                variant="danger"
                style={{ textDecoration: 'none', cursor: 'pointer', backgroundColor: 'red', color: 'white' }}
                onClick={() => toggleFavorito(game.id)}
              >
                {gameSelect.includes(game.id) ? 'Quitar del Carrito' : 'Agregar al Carrito'}
              </Button>
              <Button variant="success" style={{ backgroundColor: 'green', color: 'white', marginLeft: '10px' }}>
                <Link to={`/game/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>Ver Detalle</Link>
              </Button>


            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </>
  );



}

export default Games;