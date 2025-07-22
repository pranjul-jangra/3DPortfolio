import { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'motion/react';
import Navbar from '../components/Navbar';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import useThemeStyles from '../hooks/useThemeStyles';
import './layouts.scss'
import ParticleBackground from '../ui/ParticleBackground';


export default function Projects() {
    const pageInfo = UseUpdatePageHeight();
    const { bgColor, color, cyanText } = useThemeStyles();

    const [visible, setVisible] = useState(false);
    const [showSection, setShowSection] = useState({ frontend: false, mern: false });
    const mernRef = useRef();
    const frontendRef = useRef();

    useEffect(() => {
        const visibeTl = setTimeout(() => setVisible(true), 350);
        return () => clearTimeout(visibeTl);
    }, []);

    const frontendInView = useInView(frontendRef, { margin: "-110px" });
    const mernInView = useInView(mernRef, { margin: "-110px" });

    useEffect(() => {
        if (frontendInView && !showSection.frontend) return setShowSection(prev => ({ ...prev, frontend: true }));
        if (mernInView && !showSection.backend) return setShowSection(prev => ({ ...prev, mern: true }));

    }, [frontendInView, mernInView]);

    // Variants
    const parentVariant = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.1,
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        },
    };

    const childVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 1.1 } }
    };


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar />
            <ParticleBackground />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            <section className='w-full max-w-7xl min-h-dvh pt-24 pb-20 px-16 flex flex-col justify-center items-start z-10'>
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className={`text-3xl font-bold mb-2 ${cyanText}`}>Projects That Define My Craft</motion.h1>
                <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className={`mb-2`}>Projects where design, animation, and UI/UX take the spotlight.</motion.p>
                <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }}>Each project reflects my passion for clean design, seamless interaction, and purposeful user experiences. From animated interfaces to intuitive layouts, these builds demonstrate not just technical skill — but thoughtful execution that puts users first.</motion.p>

                {/* Full-stack projects */}
                <motion.h2
                    ref={mernRef}
                    className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={(showSection.mern && visible) ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1 }}
                >
                    Full-Stack Projects
                </motion.h2>
                <motion.div variants={parentVariant} initial="initial" animate={(showSection.mern && visible) ? "animate" : ""} className='projects-grid gap-6 w-full'>
                    {
                        projects?.filter(p => p.type === "MERN")?.map((p, i) => (
                            <ProjectCard variants={childVariants} key={`frontend-project-${i}`} project={p} />
                        ))
                    }
                </motion.div>

                {/* Frontend projects */}
                <motion.h2
                    ref={frontendRef}
                    className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={(showSection.frontend && visible) ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    Frontend Projects
                </motion.h2>
                <motion.div variants={parentVariant} initial="initial" animate={(showSection.frontend && visible) ? "animate" : ""} className='projects-grid gap-6 w-full'>
                    {
                        projects?.filter(p => p.type === "Frontend")?.map((p, i) => (
                            <ProjectCard variants={childVariants} key={`frontend-project-${i}`} project={p} />
                        ))
                    }
                </motion.div>
            </section>
        </main>
    )
}
