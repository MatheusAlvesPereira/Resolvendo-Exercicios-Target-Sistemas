import React, { useState } from 'react';

function InverterString() {
  const [text, setText] = useState('');

  const handleInvertClick = () => {
    const invertedText = text.split('').reverse().join('');
    setText(invertedText);
  };

  return (
    <div className='box__exercicio5'>
      <h2>Digite um Nome para ser Invertido.....</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleInvertClick}>Inverter</button>
      <p>{text}</p>
    </div>
  );
}

export default InverterString;