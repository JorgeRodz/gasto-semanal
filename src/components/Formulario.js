import React, { useState } from "react";
import Error from "./Error";
import { nanoid } from "nanoid";

const Formulario = ({ agregarNuevoGasto }) => {
  const [nombreGasto, guardarNombreGasto] = useState("");
  const [cantidad, guardarCantidad] = useState("");
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
    guardarError({ error: false, mensaje: "" });

    // construir el gasto
    const gasto = {
      nombreGasto,
      cantidad,
      id: nanoid(),
    };

    // pasar el gasto al componente principal
    agregarNuevoGasto(gasto);

    // resetear el form
    guardarNombreGasto("");
    guardarCantidad("");
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
          value={cantidad}
          onChange={(event) => guardarCantidad(parseInt(event.target.value))}
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
