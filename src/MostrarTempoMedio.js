import React from 'react';

const MostrarTempoMedio = (props) => {
  const tempoMedio = props.tempoMedio;
  const minutos = Math.round(tempoMedio / 60);
  const segundos = tempoMedio % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;
  return (
    <p className="tempo-medio">
      <span>{`${minutosStr}:${segundosStr}`}</span><br />
      Tempo médio por volta
    </p>
  )
}

export default MostrarTempoMedio;