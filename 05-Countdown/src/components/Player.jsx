import { useState } from 'react';

// Functional component for the Player
export default function Player() {
  
  // State to track whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // State to store the entered player name
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // Event handler for input changes
  function handleChange(event) {
    // Reset the submitted status and update the entered player name
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  // Event handler for the button click
  function handleClick() {
    // Set submitted to true when the button is clicked
    setSubmitted(true);
  }

  // JSX for the Player component
  return (
    <section id="player">
      {/* Display the player name or 'unknown entity' based on submission status */}
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        {/* Input field with onChange event handler and value controlled by enteredPlayerName */}
        <input
          onChange={handleChange}
          value={enteredPlayerName}
          type="text"
        />
        {/* Button triggers the handleClick function on click */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
