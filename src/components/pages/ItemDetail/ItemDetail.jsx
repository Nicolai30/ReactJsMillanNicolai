import Counter from "../../common/counter/Counter";
import "./ItemDetail.css";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <div className="item-detail">
      <img className="item-image" src={item.ImageSrc} alt={item.title} />
      <div className="item-info">
        <h2>{item.title}</h2>
        <h3>Artista: {item.artist}  || Categoria: {item.Category}</h3>
        <p>{item.description}</p>
        <h4>Precio: {item.price}</h4>
        {/* Aquí puedes incluir más detalles, como el precio o descripción si es necesario */}
        
        {/* Descomenta el Counter y accede correctamente al stock del item */}
        {/* <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} /> */}
      </div>
    </div>
  );
};

export default ItemDetail;
