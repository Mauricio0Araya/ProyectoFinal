import React, { createContext, useContext, useState, useEffect } from 'react';
import imagenesData from '../../assets/json/games.json';

const ImagenContext = createContext(); 

export function ImagenProvider({ children }) {
  const [games, setGames] = useState([]); 
  const [gameSelect, setGameSelected] = useState([]);

  useEffect(() => {
    // Cargar las imágenes desde el archivo JSON al inicializar el contexto
    setGames(imagenesData); // Cambiado para acceder directamente a imagenesData
    
  }, []);

  return (
    <ImagenContext.Provider value={{ games, gameSelect, setGameSelected }}>
      {children}
    </ImagenContext.Provider>
  );
}

export function useImagen() {
  return useContext(ImagenContext);
}