import {ItemCard} from "../../common/ItemCard/ItemCard"

export const ItemListContainer = () => {
  return (
    <div>
      <ItemCard title="nike" price={1200} stock={5} />
      <ItemCard title="nike 2" price={500} stock={15} />
      <ItemCard title="wilson " price={111} stock={51} />
      <ItemCard title="pepe" price={300} stock={12} />
    </div>
  );
};