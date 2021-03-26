import React, { useState } from 'react';

const Contador = ({cuentaInicial}) => {
  const [cuenta, setCuenta] = useState(cuentaInicial || 0);

  return (
    <div data-cy="contador">
      <button type="button" id="btnDec" onClick={() => setCuenta(cuenta - 1)}>-</button>
      <span id="cuenta">Cuenta: {cuenta}</span>
      <button type="button" id="btnInc" onClick={() => setCuenta(cuenta + 1)}>+</button>
    </div>
  )
}

export default Contador;