import React from 'react';
import { useImagen } from './Context/ImagenContext';
import '../assets/css/carrito.css';
import Button from 'react-bootstrap/Button';
import Heart from './Heart'; // Suponiendo que este componente esté definido correctamente
import Card from 'react-bootstrap/Card';

function GameFav() {
  const { games, gameFavoritos, setGameFavoritos } = useImagen();
  
  const toggleFavorito = (id) => {
    if (gameFavoritos.includes(id)) {
      // Si ya es favorito, quitarlo de la lista de favoritos
      setGameFavoritos(gameFavoritos.filter((favId) => favId !== id));
    } else {
      // Si no es favorito, agregarlo a la lista de favoritos
      setGameFavoritos([...gameFavoritos, id]);
    }
  }

  return (
    <div className="carrito">
      <h2 className='h3'>Favoritos</h2>
      <ul className='lista'>
        {gameFavoritos.map((id) => (
          <li key={id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={games.find((g) => g.id === id).urlimagen} alt={games.find((g) => g.id === id).nombre} />
              <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                  {games.find((g) => g.id === id).nombre} - ${games.find((g) => g.id === id).precio}
                </Card.Text>
                <Button
                  variant="danger"
                  style={{ textDecoration: 'none', cursor: 'pointer', backgroundColor: 'red', color: 'white' }}
                  onClick={() => toggleFavorito(id)}
                >
                  <Heart filled={gameFavoritos.includes(id)} /> {/* Aquí debes pasar 'id' en lugar de 'game.id' */}
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameFav;
