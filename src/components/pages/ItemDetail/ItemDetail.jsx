import React, { useState } from 'react';
import Counter from "../../common/counter/Counter";
import "./ItemDetail.css";
import Button from '@mui/material/Button';

const ItemDetail = ({ item, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  return (
    <div className="item-detail">
      <img className="item-image" src={item.ImageSrc} alt={item.title} />
      <div className="item-info">
        <h1>{item.title}</h1>
        <h3>Artista: {item.artist}  || Categoria: {item.Category}</h3>
        <p>{item.description}</p>

        <div className="price-counter-container">
          <h4>Precio: US$ {item.price}</h4>
          <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} onChange={(value) => setContador(value)} />
          <Button 
            variant="contained" 
            className="Button" 
            onClick={() => agregarAlCarrito(item, contador)} 
          >
            Agregar
          </Button>
        </div>     
      </div>
    </div>
  );
};

export default ItemDetail;
