import { useState, useRef } from 'react';

// Functional component for the Player
export default function Player() {
  // Create a ref to hold the input element reference
  const playerName = useRef();

  // State to store the entered player name
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  
  // Event handler for the button click
  function handleClick() {
    // Set enteredPlayerName to the current value of the input element
    setEnteredPlayerName(playerName.current.value);
    // Clear the input field after setting the player name
    playerName.current.value = '';
  }

  // JSX for the Player component
  return (
    <section id="player">
      {/* Display the player name or 'unknown entity' if not set */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* Input field with ref pointing to playerName variable */}
        <input
          ref={playerName}
          type="text"
        />
        {/* Button triggers the handleClick function on click */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
