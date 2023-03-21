import { useState, useRef } from "react";
import "./App.css";

const OPERATION = {
  add: "add",
  minus: "substract",
  times: "times",
  divide: "divide",
  resetInput: "resetInput",
  resetResult: "resetResult",
};

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function calculator(e, type) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    switch (type) {
      case OPERATION.add:
        setResult((result) => result + inputValue);
        break;
      case OPERATION.minus:
        setResult((result) => result - inputValue);
        break;
      case OPERATION.times:
        setResult((result) => result * inputValue);
        break;
      case OPERATION.divide:
        setResult((result) => result / inputValue);
        break;
      case OPERATION.resetInput:
        inputRef.current.value = 0;
        break;
      case OPERATION.resetResult:
        setResult(0);
        break;
      default:
        throw new Error("Please pick a valid operation");
    }
  }

  return (
    <div>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={(e) => calculator(e, OPERATION.add)}>add</button>
        <button onClick={(e) => calculator(e, OPERATION.minus)}>
          substract
        </button>
        <button onClick={(e) => calculator(e, OPERATION.times)}>
          multiply
        </button>
        <button onClick={(e) => calculator(e, OPERATION.divide)}>divide</button>
        <button onClick={(e) => calculator(e, OPERATION.resetInput)}>
          reset input
        </button>
        <button onClick={(e) => calculator(e, OPERATION.resetResult)}>
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
