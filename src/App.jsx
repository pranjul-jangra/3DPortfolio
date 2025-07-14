import { useState, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Lenis from '@studio-freight/lenis';
import './App.css';

const About = lazy(() => import('./layout/About'));
const Skills = lazy(() => import('./layout/Skills'));
const Contact = lazy(() => import('./layout/Contact'));
const Projects = lazy(() => import('./layout/Projects'));
const Experience = lazy(() => import('./layout/Experience'));
const LandingPage = lazy(() => import('./layout/LandingPage'));



export default function App() {
  const [isLightMode, setIsLightMode] = useState(JSON.parse(localStorage.getItem("pp-theme") || 'true'));

  // Smooth scrolling using Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);


  const themeSetter = () => {
    const theme = isLightMode ? "false" : "true";
    localStorage.setItem("pp-theme", theme);
    setIsLightMode(prev => !prev);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage isLightMode={isLightMode} themeSetter={themeSetter} />} />
          <Route path='/about-me' element={<About isLightMode={isLightMode} />} />
          <Route path='/skills' element={<Skills isLightMode={isLightMode} />} />
          <Route path='/contact-me' element={<Contact isLightMode={isLightMode} />} />
          <Route path='/projects' element={<Projects isLightMode={isLightMode} />} />
          <Route path='/experience' element={<Experience isLightMode={isLightMode} />} />
        </Routes>
      </Router>



      <Toaster richColors position="bottom-right" />
    </>
  )
}
