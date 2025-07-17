
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
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  const circleRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circle = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

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

  return (
    <>
     <div ref={circleRef} className="custom-cursor-circle" />
     <Header/>
     <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Contact/>
     </main>
     <Footer/>
     <Scrollup/>
    </>
  );
}

export default App;
