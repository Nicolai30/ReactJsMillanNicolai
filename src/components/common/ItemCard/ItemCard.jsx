import './ItemCard.css';
import { Link } from "react-router-dom";

const ItemCard = ({id,stock,title,price,artist,className,ImageSrc,Category}) => {
  return (
    <Link to={`/ItemDetail/${id}`} className={className}>
      <img className="DefaultImg" src= {ImageSrc || "https://res.cloudinary.com/df0naogwq/image/upload/v1728349062/owkzsv7ivvweqtadcca6.jpg"} 
        alt="Default-Img" />
      <h2>{title}</h2>
      <p>Precio: ${price}</p>
      <p>Artista: {artist}</p>
      <p>Categoria: {Category}</p>
    </Link>
  );
};

export default ItemCard;
