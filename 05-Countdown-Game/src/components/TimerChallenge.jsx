import { useState, useRef } from 'react';

import ResultModal from './ResultModal.jsx';

// Declare the TimerChallenge component
export default function TimerChallenge({ title, targetTime }) {
  // useRef to hold the timer and dialog components
  const timer = useRef();
  const dialog = useRef();

  // State to manage the remaining time
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // Check if the timer is active
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Check if time has run out
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open(); // Open the result modal when time is up
  }

  // Reset the timer
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // Start the timer
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  // Stop the timer
  function handleStop() {
    dialog.current.open(); // Open the result modal when stopping the timer
    clearInterval(timer.current);
  }

  // JSX structure for the TimerChallenge component
  return (
    <>
      {/* ResultModal component for displaying results */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      {/* TimerChallenge UI */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          {/* Button to start or stop the timer */}
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        {/* Display timer status */}
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
