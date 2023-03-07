import React, { useState } from "react";

export default function Fibonacci() {

  const [num, setNum] = useState("");
  const [pertence, setPertence] = useState(false);

  function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  function verificarFibonacci() {
    const numInt = parseInt(num);
    let i = 0;
    while (fibonacci(i) <= numInt) {
      if (fibonacci(i) === numInt) {
        setPertence(true);
        break;
      }
      i++;
    }
  }

  return (
    <div>
      <label>
        Digite um número inteiro:
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </label>
      <button onClick={verificarFibonacci}>Verificar</button>
      {pertence ? (<p>O número {num} pertence à sequência de Fibonacci.</p>) 
       : (<p>O número {num} não pertence à sequência de Fibonacci.</p>)
      }
    </div>
  );
}