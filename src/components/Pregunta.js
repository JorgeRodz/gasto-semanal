import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

// prettier-ignore
const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta,}) => {
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
    actualizarPregunta(false);
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

Pregunta.protoTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
