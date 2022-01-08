import "./styles.css";
import useTimeout from "./customHooks/useTimeout";
import { useEffect, useRef, useState } from "react";
import useFetch from "./customHooks/useFetch";

export default function App() {
  // const [state, setState] = useState(null);
  // const response = useFetch(`https://api.github.com/search/users?q=masai`);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const checkTime = () => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }

    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }
  };

  const ref = useRef(null);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const pauseTimer = (id) => {
    clearInterval(id);
  };

  const resetTimer = (id) => {
    pauseTimer(id);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    checkTime();
  }, [seconds]);

  return (
    <div className="App">
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={() => pauseTimer(ref.current)}>Pause</button>
      <button onClick={() => resetTimer(ref.current)}>Reset</button>
    </div>
  );
}
