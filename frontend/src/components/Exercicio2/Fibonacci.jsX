import React, { useState } from 'react';

export default function FibonacciSequence() {
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");

  function checkFibonacci() {
    let a = 0, b = 1, c;
    while (b <= num) {
      if (b === num) {
        setMessage(`${num} pertence à sequência de Fibonacci.`);
        return;
      }
      c = a + b;
      a = b;
      b = c;
    }
    setMessage(`${num} não pertence à sequência de Fibonacci.`);
  }

  return (
    <div className='box'>
      <h1>Verificando um determinado número pertence ou não à Sequência de Fibonacci</h1>
      <label className='box__title'>
        Digite um número inteiro:
        <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
      </label>
      <button onClick={checkFibonacci}>Verificar</button>
      <p>{message}</p>
    </div>
  );
}