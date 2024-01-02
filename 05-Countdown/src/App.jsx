import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

// Main App component
function App() {
  return (
    <>
      {/* Player component for user interaction */}
      <Player />
      
      {/* Section for displaying timer challenges */}
      <div id="challenges">
        {/* TimerChallenge components with different difficulty levels */}
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
