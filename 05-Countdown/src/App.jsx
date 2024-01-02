import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

// Main App component
function App() {
  return (
    <>
      {/* Include the Player component for user interaction */}
      <Player />
      
      {/* Section to display different TimerChallenge components with varying difficulty levels */}
      <div id="challenges">
        {/* TimerChallenge with an easy level (1 second target time) */}
        <TimerChallenge title="Easy" targetTime={1} />
        
        {/* TimerChallenge with a not easy level (5 seconds target time) */}
        <TimerChallenge title="Not easy" targetTime={5} />
        
        {/* TimerChallenge with a getting tough level (10 seconds target time) */}
        <TimerChallenge title="Getting tough" targetTime={10} />
        
        {/* TimerChallenge with a pros only level (15 seconds target time) */}
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
