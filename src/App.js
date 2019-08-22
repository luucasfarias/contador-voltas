import React, { useState, useEffect } from 'react';
import './style.css';

import MostrarVoltas from './MostrarVoltas';
import MostrarTempoMedio from './MostrarTempoMedio';
import Button from './Button';

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
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
    }
  }

  const reset = () => {
    setNumVoltas(0);
    setTempoMedio(0);
  }

  return (
    <div>
      <MostrarVoltas voltas={numVoltas}></MostrarVoltas>

      <Button text="+" className="big" onClick={increment}></Button>
      <Button text="-" className="big" onClick={decrement}></Button>

      {
        numVoltas > 0 &&
        <MostrarTempoMedio tempoMedio={Math.round(tempoMedio / numVoltas)}></MostrarTempoMedio>
      }

      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'}></Button>
      <Button onClick={reset} text="Reiniciar"></Button>
    </div>
  );
}

export default App;
