import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({ guardarPresupuesto, guardarRestante }) => {
  /*---------------- States --------------------*/
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  /*---------------- Funciones para actulizar el state --------------------*/
  // Funcion para actuliazar el state cantidad
  const definirPresupuesto = (event) => {
    guardarCantidad(+event.target.value);
  };

  /*--------------------------------------------------------------------------------------------------------*/

  // Submit: funcion que se ejecuta cuando le damos submit al formulario
  const agregarPresupuesto = (event) => {
    event.preventDefault();

    // validar
    if (cantidad < 1 || Number.isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    // Si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      {/* prettier-ignore */}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
