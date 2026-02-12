import { useState, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';
import useLenis from './hooks/useLenis';

const Navbar = lazy(() => import('./components/Navbar'));
const LandingPage = lazy(() => import('./layout/LandingPage'));
const About = lazy(() => import('./layout/About'));
const Skills = lazy(() => import('./layout/Skills'));
const Projects = lazy(() => import('./layout/Projects'));
const Experience = lazy(() => import('./layout/Experience'));
const Contact = lazy(() => import('./layout/Contact'));

// Shared layout for all routes
function RootLayout({ isLightMode, themeSetter }) {
  useLenis();

  const { pathname } = useLocation();
  const hideNav = pathname === "/";

  return (
    <section className={`selection:bg-zinc-600/30 ${isLightMode ? "selection:text-black" : "selection:text-white"}`}>
      {!hideNav && <Navbar />}
      <Outlet />
      <ScrollRestoration />
      <Toaster theme={isLightMode ? "light" : "dark"} position="bottom-right" />
    </section>
  );
}

// Route tree
const createRouter = (isLightMode, themeSetter) => createBrowserRouter([
  {
    path: '/',
    element: <RootLayout isLightMode={isLightMode} themeSetter={themeSetter} />,
    children: [
      { path: '', element: <LandingPage isLightMode={isLightMode} themeSetter={themeSetter} /> },
      { path: 'about-me', element: <About /> },
      { path: 'skills', element: <Skills isLightMode={isLightMode} /> },
      { path: 'contact-me', element: <Contact /> },
      { path: 'projects', element: <Projects /> },
      { path: 'experience', element: <Experience /> }
    ]
  }
]);


export default function App() {
  const [isLightMode, setIsLightMode] = useState(JSON.parse(localStorage.getItem("pp-theme") || 'true'));

  const themeSetter = () => {
    const theme = isLightMode ? "false" : "true";
    localStorage.setItem("pp-theme", theme);
    setIsLightMode(prev => !prev);
  };

  const router = createRouter(isLightMode, themeSetter);

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}