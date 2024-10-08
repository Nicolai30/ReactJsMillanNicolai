import  "./ItemListContainer.css"
import ItemCard from "../../common/ItemCard/ItemCard";

export const ItemListContainer = ({items}) => {
  return (
    <div className="ItemListContainer">
      {items.map((item, index) => (
        <ItemCard 
          key={index}
          title={item.title} 
          price={item.price} 
          artist={item.artist} 
          stock={item.stock} 
          className="card" 
          ImageSrc={item.ImageSrc}
        />
      ))}
    </div>
  );
};
