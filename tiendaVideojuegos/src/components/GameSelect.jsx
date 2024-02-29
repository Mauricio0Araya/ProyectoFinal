import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "./Context/userContext.jsx"
import { useImagen } from './Context/ImagenContext';
import '../assets/css/carrito.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GameSelect() {
  const { games, gameSelect, setGameSelected } = useImagen();
  const [productCounts, setProductCounts] = useState({}); // Estado local para contar la cantidad de cada producto
  var {user} = useContext(UserContext); // const de usuario
  var resultado = ""

  // INICIA LO NUEVO PARA QUE FUNCIONE EL CARRITO//
    
  const [juegosCarrito, setJuegosCarrito] = useState("");
      

      useEffect(() => {

        obtenerJuegosCarro()
      }, []);

      const obtenerJuegosCarro = async () => {
        //const url = "http://localhost:3000/carrito";//
        const url = "https://pfgames-devbackend-vutz.onrender.com/carrito";

        console.log("Obteniendo juegos del carrito");
      
        try {
          const data = await fetch(url, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + user,
            },
          });
      
          resultado = await data.json();
          console.log(resultado)
        } catch (error) {
          console.error("Error: ", error);
        }
      };
      
      

  // FINALIZA LO NUEVO PARA QUE FUNCIONE EL CARRITO//



  // Función para calcular el total a pagar
  const calculateTotal = () => {
    const total = gameSelect.reduce((acc, id) => {
      const game = games.find((g) => g.id === id);
      const count = productCounts[id] || 0;
      return acc + (game.precio * count);
    }, 0);

    return total;
  };

  const toggleFavorito = (id) => {
    if (gameSelect.includes(id)) {
      // Si ya es favorito, quitarlo de la lista de favoritos
      setGameSelected(gameSelect.filter((favId) => favId !== id));
    } else {
      // Si no es favorito, agregarlo a la lista de favoritos
      setGameSelected([...gameSelect, id]);
    }
  }

  function increaseProductCount(id) {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  }

  function decreaseProductCount(id) {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0), // Asegura que la cantidad no sea negativa
    }));
  }

  return (
    <div className="carrito">
      <h2 className='carrito h3'>Carrito de Compras</h2>
      <ul className='lista'>
        {gameSelect.map((id) => (
          <li key={id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={games.find((g) => g.id === id).url_imagen} alt={games.find((g) => g.id === id).nombre} />
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
                  {gameSelect.includes(id) ? 'Quitar del Carrito' : 'Agregar al Carrito'}
                </Button>
                <Button variant="outline-success" onClick={() => decreaseProductCount(id)}>-</Button>
                <span>{productCounts[id] || 0}</span>
                <Button variant="outline-success" onClick={() => increaseProductCount(id)}>+</Button>


              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <p className='carrito p'>Total a pagar: ${calculateTotal()}</p>
    </div>
  );
}

export default GameSelect;
