import { useState } from 'react';
import './App.css';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import LightRays from './LightRays';

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
        <div className="main-content" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* LightRays Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>

          {/* Main Content Text */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              color: 'white',
              textAlign: 'center',
              padding: '100px 20px',
              fontSize: '1.5rem',
              lineHeight: '1.8',
            }}
          >
            <div className="Header">
              <BlurText
              text="Moch Bagja Fadillah"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="blur-text"
              />
            </div>
            <div className="Content1">
              <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={10}
              >
              When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!   When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!   When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!   When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!   When does a man die? When he is hit by a bullet? No! When he suffers a
              disease? No! When he ate a soup made out of a poisonous mushroom? No! A man
              dies when he is forgotten!   
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
