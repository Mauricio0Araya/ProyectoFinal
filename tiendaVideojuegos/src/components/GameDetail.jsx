import React from 'react';
import { useParams } from 'react-router-dom';
import { useImagen } from './context/ImagenContext';
import Carousel from 'react-bootstrap/Carousel';

function GameDetail() {
  const { games } = useImagen();
  const { id } = useParams();

  const game = games.find((g) => g.id === id);

  if (!game) {
    return <div>juego no encontrado</div>;
  }

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={game.urlimagen} alt={game.nombre} />
          <Carousel.Caption>
            <h3>{game.nombre}</h3>
            <p>{game.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={game.urlimagen} alt={game.nombre} />
          <Carousel.Caption>
            <h3>Caractaristicas</h3>
            <p>{game.categoria}</p>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GameDetail;
