import { useState, useEffect } from 'react';
import './App.css';
import BlurText from './BlurText';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Welcome animation done!');

    setTimeout(() => setFadeOut(true), 1500);

    setTimeout(() => setShowWelcome(false), 2500);
  };

  return (
    <>
      {showWelcome ? (
        <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
          <BlurText
            text="Welcome to my website"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="blur-text"
          />
        </div>
      ) : (
        <div className="main-content">
          <h1>Website Ready 🚀</h1>
          <p>Selamat datang di halaman utama bro!</p>
        </div>
        
      )}
    </>
  );
}

export default App;
