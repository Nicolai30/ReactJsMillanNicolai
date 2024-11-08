import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(Math.max(contador - 1, 0)); // Evitar que el contador sea negativo
  };

  return (
    <div style={{color: "black", marginTop: 25,marginLeft: 50, fontWeight: "bold", fontSize: 19}}>
      <Button
        aria-label="reducir"
        onClick={restar}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <span>{contador}</span>
      <Button
        aria-label="incrementar"
        onClick={sumar}
      >
        <AddIcon fontSize="small" />
      </Button>
    </div>  
  );
};

export default Counter;
