import { useState } from 'react';

// Functional component for the Player
export default function Player() {
  
 const [submitted, setSubmitted] = useState(false);

  // State to store the entered player name
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleChange(event) {
      setSubmitted(false);
      setEnteredPlayerName(event.target.value);
    }

  // Event handler for the button click
  function handleClick() {
    setSubmitted(true);
  }

  // JSX for the Player component
  return (
    <section id="player">
      {/* Display the player name or 'unknown entity' if not set */}
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        {/* Input field with ref pointing to playerName variable */}
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
