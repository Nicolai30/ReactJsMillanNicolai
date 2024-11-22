import Counter from "../../common/Counter/Counter";
import "./ItemDetail.css";


const ItemDetail = ({ item, agregarAlCarrito, totalInCart}) => {
  return (
    <div className="item-detail">
      <img className="item-image" src={item.ImageSrc} alt={item.title} />
      <div className="item-info">
        <h1>{item.title}</h1>
        <h3>Artista: {item.artist}  || Categoria: {item.Category}</h3>
        <p>{item.description}</p>

        <div className="price-counter-container">
          <h4>Precio: US$ {item.price}</h4>
          <Counter 
            stock={item.stock} 
            agregarAlCarrito={agregarAlCarrito} 
            totalInCart={totalInCart} 
          />
        </div>     
      </div>
    </div>
  );
};

export default ItemDetail;
