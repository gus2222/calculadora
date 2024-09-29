import React, { useState } from 'react';
import './App.css';

const Button = ({ label, onClick, className }) => (
  <button className={className} onClick={onClick}>{label}</button>
);

const Display = ({ value }) => (
  <div className="display">{value}</div>
);

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <Button label="-" onClick={() => handleClick('-')} className="operation-button" />
      <Button label="+" onClick={() => handleClick('+')} className="operation-button" />
      <Button label="/" onClick={() => handleClick('/')} className="operation-button" />
      <Button label="*" onClick={() => handleClick('*')} className="operation-button" />

      <Button label="1" onClick={() => handleClick('1')} className="number-button" />
      <Button label="2" onClick={() => handleClick('2')} className="number-button" />
      <Button label="3" onClick={() => handleClick('3')} className="number-button" />
      <Button label="C" onClick={() => handleClick('C')} className="clear-button"/>

      <Button label="4" onClick={() => handleClick('4')} className="number-button" />
      <Button label="5" onClick={() => handleClick('5')} className="number-button" />
      <Button label="6" onClick={() => handleClick('6')} className="number-button" />

      <Button label="7" onClick={() => handleClick('7')} className="number-button" />
      <Button label="8" onClick={() => handleClick('8')} className="number-button" />
      <Button label="9" onClick={() => handleClick('9')} className="number-button" />

      <Button label="0" onClick={() => handleClick('0')} className="number-button" />
      <Button label="." onClick={() => handleClick('.')} className="number-button" />
      <Button label="=" onClick={() => handleClick('=')} className="equal-button"  />
    </div>
  );
};

function App() {
  return <Calculator />;
}

export default App;
