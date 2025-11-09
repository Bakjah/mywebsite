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
  },
  {
    image: "data:image/jpeg;base64,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",
    title: "#Project 3",
    handle: "Coming soon",
    borderColor: "#b9ab10ff",
    gradient: "linear-gradient(180deg, #b9ab10ff, #000)",
    url: "https://Bakjah.github.io/"
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
          <div className="centerDiv" style={{height: 800,}}>
            <div style={{ height: '600px', position: 'relative' }}>
              <h1 style={{textAlign: 'center', fontSize: 70,}}>Portofolio</h1>
              <ChromaGrid 
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
          <div className="Footerdiv" style={{height: 100}}>

          </div>
        </div>
      )}
    </>
  );
}

export default App;
