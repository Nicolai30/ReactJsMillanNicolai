import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const Counter = ({ stock, totalInCart, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo alcanzado");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ color: "black", marginTop: 25, marginLeft: 50, fontWeight: "bold", fontSize: 19 }}>
      <Button aria-label="reducir" onClick={restar}>
        <RemoveIcon fontSize="small" />
      </Button>

      <span>{contador}</span>

      <Button aria-label="incrementar" onClick={sumar}>
        <AddIcon fontSize="small" />
      </Button>

      <Button
        variant="contained"
        className="Button"
        onClick={() => agregarAlCarrito(contador)}
      >
        Agregar
      </Button>
    </div>
  );
};

export default Counter;
