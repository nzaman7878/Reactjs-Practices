import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

// Functional component for the Timer Challenge
export default function TimerChallenge({ title, targetTime }) {
  // Ref to hold the timer ID
  const timer = useRef();

  // States to track whether the timer has started and whether it has expired
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // Function to handle the start button click
  function handleStart() {
    // Set a timeout to mark the timer as expired after the target time
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    // Set the timer as started
    setTimerStarted(true);
  }

  // Function to handle the stop button click
  function handleStop() {
    // Clear the timeout to stop the timer
    clearTimeout(timer.current);
  }

  return (
    <>
      {/* Display the ResultModal if the timer has expired */}
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      
      {/* Section for the Timer Challenge */}
      <section className="challenge">
        {/* Display the challenge title */}
        <h2>{title}</h2>
        {/* Display the target time for the challenge */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        {/* Button to start or stop the challenge based on the timer state */}
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        {/* Display a status message based on the timer state */}
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}