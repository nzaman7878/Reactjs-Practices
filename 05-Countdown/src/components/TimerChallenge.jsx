import { useState } from 'react';

// Functional component for the Timer Challenge
export default function TimerChallenge({ title, targetTime }) {
  // State to track whether the timer has started and whether it has expired
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // Function to handle the start button click
  function handleStart() {
    // Set a timeout to mark the timer as expired after the target time
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    // Set the timer as started
    setTimerStarted(true);
  }

  // Function to handle the stop button click (not implemented)
  function handleStop() {
    // Placeholder for handling stop functionality if needed
  }

  // JSX for the Timer Challenge component
  return (
    <section className="challenge">
      {/* Display the challenge title */}
      <h2>{title}</h2>
      {/* Display a message if the timer has expired */}
      {timerExpired && <p>You lost!</p>}
      {/* Display the target time for the challenge */}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        {/* Button to start or stop the challenge based on the timer state */}
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      {/* Display a status message based on the timer state */}
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
