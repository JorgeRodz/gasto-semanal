import React from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helper";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">
        <p>Presupuesto: {`$${presupuesto}`}</p>
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        <p>Restante: {`$${restante}`}</p>
      </div>
    </>
  );
};

ControlPresupuesto.protoTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
