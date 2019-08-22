import React from 'react';

const MostrarVoltas = (props) => {
  return (
    <p className="voltas">
      <span>
        {props.voltas}<br />
      </span>
        Nº Voltas
    </p>
  )
}

export default MostrarVoltas;