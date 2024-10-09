import  "./ItemListContainer.css"
import ItemCard from "../../common/ItemCard/ItemCard";

export const ItemListContainer = ({Items}) => {
  return (
    <div className="ItemListContainer">
      {Items.map((item, index) => (
        <ItemCard 
          key={index}
          title={item.title} 
          price={item.price} 
          artist={item.artist} 
          // stock={item.stock} 
          // id={item.id}
          Category={item.Category}
          className="card" 
          ImageSrc={item.ImageSrc}
        />
      ))}
    </div>
  );
};
