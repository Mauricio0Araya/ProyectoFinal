import { React, useEffect, useContext } from 'react';
import { UserContext } from "./Context/userContext.jsx"
import { useImagen } from "./Context/ImagenContext";
import { Link } from 'react-router-dom'; // Importa Link
import "../assets/css/galeria.css";
import '../assets/css/boton.css';
import Heart from './Heart';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Games() {
  const { games, setGames, gameSelect,gameFavoritos, setGameFavoritos, setGameSelected } = useImagen();
  var {user} = useContext(UserContext); // const de usuario

// Función para manejar el cambio de favoritos
const toggleFavorito = (id) => {
  if (gameFavoritos.includes(id)) {
    // Si ya es favorito, quitarlo de la lista de favoritos
    setGameFavoritos(gameFavoritos.filter((favId) => favId !== id));
  } else {
    // Si no es favorito, agregarlo a la lista de favoritos
    setGameFavoritos([...gameFavoritos, id]);
  }
};

// Función para manejar el cambio en el carrito
const toggleCarrito = (id, precio) => {
  if (gameSelect.includes(id)) {
    // Si ya está en el carrito, quitarlo
    setGameSelected(gameSelect.filter((cartId) => cartId !== id));
  } else {
    // Si no está en el carrito, agregarlo
    setGameSelected([...gameSelect, id]);
    
  }

 

};

 //AQUI INICIA LO NUEVO PARA QUE SE OBTENGA LA LISTA DE JUEGOS DE LA BASE DE DATOS//

const añadirProductoCarrito = async (id, precio) => {

  const url = "http://localhost:3000/carrito";
      
  try {
        const data = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user
          },
          body: JSON.stringify({
                  "productId": id,
                  "productPrice": precio
          })
        });
        const resultado = await data.json();
        console.log(resultado);


  } catch (error) {
    console.error("Error: ", error)


  }



};

 const obtenerJuegosBackend = async () => {
  const url = "http://localhost:3000/producto";
  console.log("Obteniendo juegos");

  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user,
      },
    });

    const resultado = await data.json();
    setGames(resultado);
    console.log(resultado);
  } catch (error) {
    console.error("Error: ", error);
  }
};

console.log("Lista de Productos")

useEffect(() => {
  obtenerJuegosBackend()

  
}, []);



//AQUI FINALIZA LO NUEVO PARA QUE SE OBTENGA LA LISTA DE JUEGOS DE LA BASE DE DATOS//

  return (
    <>
    <div className="reg-title d-flex justify-content-center">
                    <h3>Lista de Productos</h3>
    </div>

    <div className="galeria">
      {games.map((game) => (
        <div className="galeria grid-columns-5 p-3 imagen-container" key={game.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={game.url_imagen} style={{ maxWidth: '100%', height: 'auto' }} />
            <Card.Body>
              <Card.Title>{game.nombre}</Card.Title>
              <Button
                variant="danger"
                style={{ textDecoration: 'none', cursor: 'pointer', backgroundColor: 'red', color: 'white' }}
                onClick={() => añadirProductoCarrito(game.id, game.precio)}
              >
                {gameSelect.includes(game.id, game.precio) ? 'Quitar del Carrito' : 'Agregar al Carrito'}
              </Button>
              <Button variant="success" style={{ backgroundColor: 'green', color: 'white', marginLeft: '10px' }}>
                <Link to={`/game/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>Ver Detalle</Link>
              </Button>

              <button
                onClick={() => toggleFavorito(game.id)}
                className={`corazon ${gameFavoritos.includes(game.id) ? 'favorito' : ''}`}
              >
                <Heart filled={gameFavoritos.includes(game.id)} />
              </button>

            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </>
  );



}

export default Games;
