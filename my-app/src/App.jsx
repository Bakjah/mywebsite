import { useState } from 'react';
import './App.css';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import LightRays from './LightRays';
import ProfileCard from './ProfileCard';
import avatarImg from './assets/png/IMG_3846-removebg-preview.png';
import ChromaGrid from './ChromaGrid';

const items = [
  {
    image: "https://cdn.discordapp.com/attachments/872141638045151322/1436368058447958117/image.png?ex=690f597f&is=690e07ff&hm=be9d15ab597adfe55f40b6f399a2630b5919da6befb1ce0eb4a5b0d5cd89c9a7",
    title: "#Project 1",
    handle: "Flowersday",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://Bakjah.github.io/Flowersday"
  },
  {
    image: "https://cdn.discordapp.com/attachments/872141638045151322/1436373338288160769/Desain_tanpa_judul_3.png?ex=690f5e6a&is=690e0cea&hm=77c1edcb96d2f2d7e76c58ce3dd99fe3df57f4d45943639e98c4771d8f0edcd4&",
    title: "#Project 2",
    handle: "Kalkulator",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://Bakjah.github.io/Kalkulator"
  }
];

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
          {/* 🔹 Light Rays Background */}
          <div className="light-bg">
            <LightRays
              raysOrigin="top-right"
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

          {/* 🔹 Kiri dan Kanan di Tengah */}
          <div className="top-section">
            <div className="left">
              <div className="Header">
                <h1>
                  <BlurText
                    text="Moch Bagja Fadillah"
                    delay={150}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="blur-text"
                  />
                </h1>
              </div>
              <div className="Content1">
                <p>
                  <ScrollReveal baseOpacity={0} enableBlur={true} blurStrength={10}>
                    Moch Bagja Fadillah sejak usia 7 tahun sudah tertarik pada dunia coding.
                    Kini, ia terus mengembangkan kemampuan di bidang teknologi dan desain web,
                    dikenal sebagai pribadi kreatif, tekun, dan selalu ingin belajar hal baru
                    untuk mengasah skill serta menghasilkan karya yang bermanfaat.
                  </ScrollReveal>
                </p>
              </div>
            </div>

            <div className="right">
              <div className="mycardid">
                <ProfileCard
                  name=""
                  title=""
                  handle="mochbagja_fad"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={avatarImg}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log('Contact clicked')}
                />
              </div>
            </div>
          </div>

          {/* 🔹 Center Div di Bawah */}
          <div className="centerDiv">
            <div style={{ height: '600px', position: 'relative' }}>
              <ChromaGrid 
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
