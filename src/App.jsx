import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [startTime, setStartTime] = useState();
  const [now, setNow] = useState();
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef();

  function handleStart() {
    const currentTime = Date.now();
    setStartTime(currentTime - elapsedTime); 
    setNow(currentTime);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    if (startTime != null) {
      setElapsedTime(Date.now() - startTime); // Update elapsed time when stopped
    }
  }

  function Reset(){
    setStartTime(Date.now())
    setNow(Date.now())
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
    <img className="stopwatch" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Yc8CepzzFKzGGd1jcd9hd5uA9E-35awEjg&s" alt="" />
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <div className="btn">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
