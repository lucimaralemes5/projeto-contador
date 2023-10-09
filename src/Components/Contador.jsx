import React, { useState } from "react";

function Contador() {
  const [count, setContador] = useState(0);

  const incremento = () => {
    if (count < 10) {
      setContador(count + 1);
    }
  };

  const decremento = () => {
    if (count > 0) {
      setContador(count - 1);
    }
  };

  return (
    <div className="contador">
      <h1> {count}</h1>
      <button className="azul" onClick={incremento}>
        +
      </button>
      <button className="vermelho" onClick={decremento}>
        -
      </button>
    </div>
  );
}

export default Contador;
