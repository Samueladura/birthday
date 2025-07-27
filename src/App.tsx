import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GreetingScreen from './components/GreetingScreen';
import SurpriseScreen from './components/SurpriseScreen';

function App() {
  const [stage, setStage] = useState(0); // 0 = lock screen, 1 = greeting, 2 = surprise

  return (
    <div className="App font-sans">
      {stage === 0 && <WelcomeScreen onUnlock={() => setStage(1)} />}
      {stage === 1 && <GreetingScreen onGiftClick={() => setStage(2)} />}
      {stage === 2 && <SurpriseScreen />}
    </div>
  );
}

export default App;
