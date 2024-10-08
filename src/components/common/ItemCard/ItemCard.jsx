import './ItemCard.css';

const ItemCard = ({ title, price,artist, stock, className,ImageSrc }) => {
  return (
    <div className={className}>
      <img className="DefaultImg" src= {ImageSrc || "https://res.cloudinary.com/df0naogwq/image/upload/v1728349062/owkzsv7ivvweqtadcca6.jpg"} 
        alt="Default-Img" />
      <h2>{title}</h2>
      <p>Precio: ${price}</p>
      <p>Artista: {artist}</p>
      {/* <p>Stock: {stock}</p> */}
    </div>
  );
};

export default ItemCard;
