import React, { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  /*---------------- states --------------------*/
  const [presupeusto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
