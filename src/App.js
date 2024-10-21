import './App.css';
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Counter />
    </div>
  );
}

function Heading() {
  return (
    <h1>Date Counter</h1>
  )
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // let message = "";

  let today = new Date();
  today.setDate(today.getDate() + count)
  let displayDate = today.toDateString()
 

  // today.setDate(today.getDate() + 0)

  function incrementStep() {
    setStep((s) => s+1)
  }
  
  function decrementStep() {
    setStep((s) => s-1);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  // if (count === 0) message = `Today is ${displayDate}`;
  // if (count === 1) message = `Tomorrow is ${displayDate}`
  // if (count > 1) message = `${count} days from today is ${displayDate}`


  // if (count === -1) message = `Yesterday was ${displayDate}` 
  // if (count < -1) message = `${Math.abs(count)} days ago was ${displayDate}`

  const messages = {
    0: `Today is ${displayDate}`,
    1: `Tomorrow is ${displayDate}`,
    '-1': `Yesterday was ${displayDate}`
};

  let message = messages[count] || 
    (count > 1 
        ? `${count} days from today is ${displayDate}` 
        : `${Math.abs(count)} days ago was ${displayDate}`);

  return (
    <div className="container">
      <div className="btn-container">
        <button className="button" onClick={decrementStep}>
          &#8722;
        </button>
        <span>Step: {step}</span>
        <button className="button" onClick={incrementStep}>
          &#43;
        </button>
      </div>
      <div className="btn-container">
        <button className="button" onClick={decreaseCount}>
          &#8722;
        </button>
        <span>Count: {count}</span>
        <button className="button" onClick={increaseCount}>
          &#43;
        </button>
      </div>
      <p className="date">{message}</p>
    </div>
  );
}
