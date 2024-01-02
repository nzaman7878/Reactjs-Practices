// Import necessary dependencies from React
import { useState, useRef } from 'react';

// Define the Player component
export default function Player() {
  // Create a ref to hold the player name input element
  const playerName = useRef();

  // State to track the entered player name
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // Function to handle button click, sets entered player name and resets input field
  function handleClick() {
    // Set entered player name based on the value in the input field
    setEnteredPlayerName(playerName.current.value);
    
    // Reset the input field to an empty value
    playerName.current.value = '';
  }

  // Render the Player component
  return (
    <section id="player">
      {/* Display a welcome message with the entered player name or a default message */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      
      {/* Input field to enter the player name and a button to set the name */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
