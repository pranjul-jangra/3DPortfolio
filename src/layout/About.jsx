import { useState, useEffect, lazy } from 'react';
import Tilt from 'react-parallax-tilt';
import Navbar from '../components/Navbar';
// import pranjul from '../assets/pranjul.jpg';
import pranjul from '../assets/erasebg-transformed.png'
import "./layouts.scss"
import AcademicDetail from '../components/AcademicDetail';
import ParticleBackground from '../ui/ParticleBackground';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
const Resume = lazy(() => import('../components/Resume'));


export default function About({ isLightMode }) {
    const [visible, setVisible] = useState(false);
    const pageInfo = UseUpdatePageHeight();

    useEffect(() => {
        const visibeTl = setTimeout(() => setVisible(true), 350);
        return () => clearTimeout(visibeTl);
    }, []);

    // Conditional styles
    const opacity = visible ? 'opacity-100' : 'opacity-0';
    const translate = visible ? "translate-y-0" : "translate-y-5";
    const bgColor = isLightMode ? "from-gray-100/50 via-gray-100/30 to-gray-100/10" : "from-black/96 via-black/94 to-black/90";
    const color = isLightMode ? "text-black" : "text-gray-100";
    const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";
    const shadow = isLightMode ? "shadow-xl shadow-[#676e625e] hover:shadow-md hover:shadow-[#606e823e]" : "shadow-lg shadow-[#000000] hover:shadow-md hover:shadow-[#000000]";


    return (
        <main className={`w-full min-h-dvh px-16 flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar isLightMode={isLightMode} />
            <ParticleBackground isLightMode={isLightMode} />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            {/* Profile */}
            <section className='w-full min-h-dvh pt-24 pb-10 px-16 flex items-center justify-center gap-20'>
                <article className='flex items-center gap-16 w-full max-w-5xl'>
                    {/* Profile image */}
                    <div className={`relative w-56 h-72 shrink-0 ${opacity} ${translate} transition-all duration-[1.4s] ease-out`}>
                        <div className="absolute w-[90%] aspect-square top-[10%] rounded-full left-1/2 -translate-x-1/2 animate-blob z-0"></div>
                        <img src={pranjul} className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-xl" alt="Pranjul"/>
                    </div>

                    {/* Intro */}
                    <div className={`flex flex-col items-start justify-center h-full *:mb-4 *:tracking-wide`}>
                        <h1 className={`text-4xl font-bold ${opacity} ${translate} ${cyanText} transition-all duration-[1.4s]`}>Meet Pranjul</h1>
                        <h3 className={`${opacity} ${translate} transition-all duration-[1.4s]`}>A full stack developer.</h3>

                        <p className={`${opacity} ${translate} transition-all duration-[1.41s]`}>Creating clean code and creative UIs with a passion for intuitive digital experiences.</p>
                        <p className={`${opacity} ${translate} transition-all duration-[1.42s]`}>Skilled in both frontend and backend development, I work with tools like like <span className='font-semibold'>React.js</span>, <span className='font-semibold'>Motion</span>, <span className='font-semibold'>Tailwind</span>, <span className='font-semibold'>Mongoose</span> and <span className='font-semibold'>Redis</span> to deliver functional and high-performance web apps.</p>
                        <p className={`${opacity} ${translate} transition-all duration-[1.43s]`}>I thrive on turning complex problems into elegant, scalable solutions — from building engaging UIs to architecting robust server-side systems with Node.js and Express.</p>

                        <p className={`font-semibold ${cyanText} ${opacity} ${translate} transition-all duration-[1.44s]`}>Check Out Performance —</p>
                        <div className={`flex items-center gap-10 *:font-semibold *:tracking-wide *:text-[14.6px] ${opacity} ${translate} transition-all duration-[1.45s]`}>
                            <p><span className={`${cyanText} mr-1`}>10+</span> Projects</p>
                            <p><span className={`${cyanText} mr-1`}>5+</span> Full Stack Projects</p>
                            <p><span className={`${cyanText} mr-1`}>20+</span> Skills</p>
                        </div>
                    </div>
                </article>
            </section>


            {/* Academic details */}
            <AcademicDetail isLightMode={isLightMode} />


            {/* Resume */}
            <section className='w-full min-h-dvh pt-10 pb-10'>
                <Resume isLightMode={isLightMode} />
            </section>
        </main>
    )
}
