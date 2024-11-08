import Counter from "../../common/counter/Counter";
import "./ItemDetail.css";
import Button from '@mui/material/Button';

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <div className="item-detail">
      <img className="item-image" src={item.ImageSrc} alt={item.title} />
      <div className="item-info">
        <h1>{item.title}</h1>
        <h3>Artista: {item.artist}  || Categoria: {item.Category}</h3>
        <p>{item.description}</p>

        <div className="price-counter-container">
          <h4>Precio: US$ {item.price}</h4>
          <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
          <Button variant="contained" className="Button">Agregar</Button>
        </div>     
      </div>
    </div>
  );
};

export default ItemDetail;
