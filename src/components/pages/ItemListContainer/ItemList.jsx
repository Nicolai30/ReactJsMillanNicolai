import { ItemCard } from "../../common/ItemCard/ItemCard";
import ModalCustom from "../../common/ModalCustom";

const ItemList = ({ Item }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {Item.map(({ id, title, price, stock, imageUrl }) => (
          <ItemCard
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>

      {/* <ModalCustom title="titulo custom">
        <div>
          <h5>un formulario</h5>
          <form action="">
            <input type="text" placeholder="nombre" />
          </form>
        </div>
      </ModalCustom> */}
    </>
  );
};

export default ItemList;