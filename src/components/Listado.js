import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((gasto) =>
        /* prettier-ignore */
        <Gasto
          key={gasto.id}
          gasto={gasto}
        />
      )}
    </div>
  );
};

Listado.protoTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
