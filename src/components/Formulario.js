import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [nombreGasto, guardarNombreGasto] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState({
    error: false,
    mensaje: "",
  });

  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (nombreGasto.trim() === "") {
      guardarError({ error: true, mensaje: "Ingresa el nombre del gasto" });
      return;
    }
    if (cantidad < 1 || Number.isNaN(cantidad)) {
      guardarError({ error: true, mensaje: "El gasto debe de ser mayor a 0" });
      return;
    }

    // construir el gasto
    guardarError({ error: false, mensaje: "" });

    // pasar el gasto al componente principal

    // resetear el form
  };

  return (
    /* prettier-ignore */
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aqui</h2>

      {error.error ? <Error mensaje={error.mensaje} /> : null}

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombreGasto}
          onChange={(event) => guardarNombreGasto(event.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad que se gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={(event) => guardarCantidad(+event.target.value)}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
