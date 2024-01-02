// Import necessary dependencies from React
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// Create a functional component for the ResultModal
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  // Create a reference for the dialog element
  const dialog = useRef();

  // Determine if the user lost based on remaining time
  const userLost = remainingTime <= 0;

  // Format the remaining time and calculate the score
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Use imperative handle to expose the 'open' method through the ref
  useImperativeHandle(ref, () => {
    return {
      open() {
        // Show the modal dialog
        dialog.current.showModal();
      },
    };
  });

  // Render the ResultModal inside a portal, attaching it to the 'modal' element in the DOM
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {/* Display appropriate message based on whether the user lost */}
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      
      {/* Display information about the game result */}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      
      {/* Create a form with a button for resetting the game */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    // Attach the portal to the element with the id 'modal'
    document.getElementById('modal')
  );
});

// Export the ResultModal component as the default export
export default ResultModal;
