// Functional component for displaying the result in a modal
export default function ResultModal({ result, targetTime }) {
    return (
      // Dialog element for the result modal
      <dialog className="result-modal">
        {/* Heading displaying the result (Win/Lose) */}
        <h2>You {result}</h2>
        {/* Paragraph displaying the target time */}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        {/* Paragraph displaying the time left when the timer was stopped */}
        <p>
          You stopped the timer with <strong>X seconds left.</strong>
        </p>
        {/* Form with a close button to handle the modal closure */}
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
  