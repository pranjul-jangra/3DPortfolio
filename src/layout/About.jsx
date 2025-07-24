import { useState, useEffect, lazy } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import pranjul from '../assets/pranjul.jpg'
import "./layouts.scss"
import AcademicDetail from '../components/AcademicDetail';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import useThemeStyles from '../hooks/useThemeStyles';
import ParticleBackground from '../ui/ParticleBackground';
const Resume = lazy(() => import('../components/Resume'));


export default function About() {
    const [visible, setVisible] = useState(false);
    const pageInfo = UseUpdatePageHeight();
    const { bgColor, color, cyanText, shadow } = useThemeStyles();

    useEffect(() => {
        const visibeTl = setTimeout(() => setVisible(true), 350);
        return () => clearTimeout(visibeTl);
    }, []);


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar />
            <ParticleBackground />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            {/* Profile */}
            <section className='w-full min-h-dvh pt-24 pb-10 px-16 max-lg:px-8 max-sm:px-4 flex items-center justify-center z-10 gap-20'>
                <article className='flex items-center gap-16 max-lg:gap-9 w-full max-w-5xl'>
                    {/* Profile image */}
                    <motion.div
                        className={`shrink-0 max-md:hidden`}
                        initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}
                    >
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.04}
                            scale={1.02}
                            tiltMaxAngleX={4}
                            tiltMaxAngleY={4}
                            transitionSpeed={1000}
                            className={`rounded-3xl overflow-hidden w-[250px] h-full shadow-lg ${shadow} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
                        >
                            <img src={pranjul} className='img-contrast object-cover' alt="" />
                        </Tilt>
                    </motion.div>

                    {/* Intro */}
                    <div className={`flex flex-col items-start justify-center h-full *:mb-4 *:tracking-wide`}>
                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }} className={`text-4xl font-bold ${cyanText}`}>Meet Pranjul</motion.h1>
                        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>A full stack developer.</motion.h2>

                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>Creating clean code and creative UIs with a passion for intuitive digital experiences.</motion.p>
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>Skilled in both frontend and backend development, I work with tools like like <span className='font-semibold'>React.js</span>, <span className='font-semibold'>Motion</span>, <span className='font-semibold'>Tailwind</span>, <span className='font-semibold'>Mongoose</span> and <span className='font-semibold'>Redis</span> to deliver functional and high-performance web apps.</motion.p>
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>I thrive on turning complex problems into elegant, scalable solutions — from building engaging UIs to architecting robust server-side systems with Node.js and Express.</motion.p>

                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }} className={`font-semibold ${cyanText}`}>Check Out Performance —</motion.p>
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }} className={`flex items-center gap-10 *:font-semibold *:tracking-wide *:text-[14.6px]`}>
                            <p><span className={`${cyanText} mr-1`}>10+</span> Projects</p>
                            <p><span className={`${cyanText} mr-1`}>5+</span> Full Stack Projects</p>
                            <p><span className={`${cyanText} mr-1`}>20+</span> Skills</p>
                        </motion.div>
                    </div>
                </article>
            </section>


            <section className='px-16 max-lg:px-8 max-sm:px-4'>
                {/* Academic details */}
                <AcademicDetail />


                {/* Resume */}
                <section className='w-full min-h-dvh pt-10 pb-10 z-10'>
                    <Resume />
                </section>
            </section>
        </main>
    )
}
