import { useState, useEffect, lazy } from 'react';
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

                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>A full stack developer passionate about intuitive digital experiences, clean architecture, and expressive user interfaces.</motion.p>
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>Proficient in both frontend and backend, I use tools like <span className='font-semibold'>React.js</span>, <span className='font-semibold'>Motion</span>, <span className='font-semibold'>Tailwind</span>, <span className='font-semibold'>Mongoose</span>, and <span className='font-semibold'>Redis</span> to build fast, functional, and user-focused web apps.</motion.p>
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }}>I enjoy translating complex ideas into scalable, elegant solutions — whether it's designing dynamic interfaces or engineering backend systems with Node.js and Express.</motion.p>

                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }} className={`font-semibold ${cyanText}`}>By the Numbers —</motion.p>
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.5 }} className={`flex items-center gap-10 *:font-semibold *:tracking-wide *:text-[14.6px]`}>
                            <p><span className={`${cyanText} mr-1`}>10+</span> Projects</p>
                            <p><span className={`${cyanText} mr-1`}>5+</span> Full Stack Builds</p>
                            <p><span className={`${cyanText} mr-1`}>20+</span> Technical Skills</p>
                        </motion.div>
                    </div>
                </article>
            </section>


            <section className='px-16 max-lg:px-8 max-sm:px-4 z-10'>
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
