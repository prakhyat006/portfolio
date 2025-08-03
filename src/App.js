
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const circleRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circle = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // Custom cursor
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    let animationId;
    const animate = () => {
      // Lerp for delay effect
      circle.current.x += (mouse.current.x - circle.current.x) * 0.18;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.18;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x - 16}px, ${circle.current.y - 16}px, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => setShowWelcome(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#fff',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '2.2rem', color: '#222', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.03em' }}
            >
              Welcome to Prakhyat's Portfolio
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ fontSize: '1.1rem', color: '#555' }}
            >
              Loading your experience...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={circleRef} className="custom-cursor-circle  " />
      {!showWelcome && (
        <>
          <Header />
          <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </>
      )}
    </>
  );
}

export default App;
