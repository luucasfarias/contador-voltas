import React, { useState, useEffect } from 'react';

const MostrarVoltas = (props) => {
  return (
    <p>
      {props.voltas}<br />
      Nº Voltas
    </p>
  )
}

const MostrarTempoMedio = (props) => {
  const tempoMedio = props.tempoMedio;
  const minutos = Math.round(tempoMedio / 60);
  const segundos = tempoMedio % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;
  return (
    <p>
      {`${minutosStr}:${segundosStr}`} <br />
      Tempo médio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempoMedio, setTempoMedio] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempoMedio(old => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1);
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1);
  }

  const reset = () => {
    setNumVoltas(0);
    setTempoMedio(0);
  }

  return (
    <div>
      <MostrarVoltas voltas={numVoltas}></MostrarVoltas>

      <Button text="+" onClick={increment}></Button>
      <Button text="-" onClick={decrement}></Button>

      {
        numVoltas > 0 &&
        <MostrarTempoMedio tempoMedio={Math.round(tempoMedio / numVoltas)}></MostrarTempoMedio>
      }

      <Button onClick={toggleRunning} text="Iniciar"></Button>
      <Button onClick={reset} text="Reiniciar"></Button>
    </div>
  );
}

export default App;
