import { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'motion/react';
import ScrollIndicator from '../ui/ScrollIndicator'
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight'
import useThemeStyles from '../hooks/useThemeStyles'
import ParticleBackground from '../ui/ParticleBackground';
import umamInternshipCert from '../assets/umamInternship.png';
import './layouts.scss'
import Tilt from 'react-parallax-tilt';
import { TableOfContents } from 'lucide-react';


export default function Experience() {
    const pageInfo = UseUpdatePageHeight();
    const { bgColor, cardBg, color, innerCardShadow, cyanText, shadow, grayBorder, experienceCard, githubCardBorder, grayText, experienceTagStyle } = useThemeStyles();

    const [visible, setVisible] = useState(false);
    const [showSection, setShowSection] = useState({ umamInternship: false });
    const umamInternshipRef = useRef();

    useEffect(() => {
        const visibeTl = setTimeout(() => setVisible(true), 350);
        return () => clearTimeout(visibeTl);
    }, []);

    const umamInternshipInView = useInView(umamInternshipRef, { margin: "-110px" });

    useEffect(() => {
        if (umamInternshipInView && !showSection.umamInternship) return setShowSection(prev => ({ ...prev, umamInternship: true }));

    }, [umamInternshipInView]);


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <ParticleBackground />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            <section className='w-full max-w-7xl min-h-dvh pt-24 pb-20 px-16 max-lg:px-8 max-sm:px-4 flex flex-col justify-center items-start z-10'>
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className={`text-3xl font-bold mb-2 ${cyanText}`}>Milestones That Shaped My Journey</motion.h1>
                <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }}>A growing record of professional development that emphasizes practical application of skills, evolving expertise, and meaningful contributions. Each milestone represents progress, adaptability, and the pursuit of excellence across different challenges.</motion.p>

                {/* Internship Card */}
                <motion.div
                    ref={umamInternshipRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={(showSection.umamInternship && visible) ? { opacity: 1, y: 0 } : ""}
                    transition={{ duration: 1.1, }}
                    className='mx-auto'
                >
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.02}
                        scale={1.005}
                        tiltMaxAngleX={2}
                        tiltMaxAngleY={2}
                        transitionSpeed={1000}
                        className={`shadow-lg hover:shadow-md mt-16 ${shadow} border ${githubCardBorder} rounded-2xl transition-all duration-[1.4s] overflow-hidden`}
                    >
                        <motion.div className={`w-full p-4 max-w-3xl ${shadow} mx-auto bg-gradient-to-br ${experienceCard} ${cardBg} transition-all duration-300`}>
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full bg-teal-500 border-2 ${grayBorder}`}></span>
                                Full Stack Developer Internship
                            </h2>

                            <div className="flex flex-wrap items-center gap-2 mt-2 mb-4">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${experienceTagStyle}`}>
                                    Unified Mentor
                                </span>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300">
                                    June 2025 – Aug 2025 • 3 months
                                </span>
                            </div>

                            <img
                                src={umamInternshipCert}
                                alt="Full-stack developer internship"
                                className={`w-full h-72 object-contain rounded-xl border ${innerCardShadow} transition-all duration-300 mb-4`}
                            />

                            <ul className={`space-y-3 ${grayText}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-500">✔</span>
                                    Developed and optimized features using the MERN stack (React, Node.js, Express, MongoDB).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-500">✔</span>
                                    Applied industry-standard practices in project-based workflows.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-500">✔</span>
                                    Worked with schema references, advanced aggregation, promises, and multiple paging techniques.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-500">✔</span>
                                    Strengthened technical expertise in modern web technologies by solving real-world problems.
                                </li>
                            </ul>
                            <p className={`mt-2 flex flex-col border ${innerCardShadow} transition-all duration-300 p-3 rounded-lg text-sm`}>
                                Projects I had worked on:
                                <span className='text-blue-400 pl-3 flex gap-2 items-center'><TableOfContents className='w-4 h-4' /> Expensely - Expense management application</span>
                                <span className='text-blue-400 pl-3 flex gap-2 items-center'><TableOfContents className='w-4 h-4' /> Sonexa - Music streaming application</span>
                                <span className='text-blue-400 pl-3 flex gap-2 items-center'><TableOfContents className='w-4 h-4' /> Yovo - Basic social media application</span>
                            </p>
                        </motion.div>
                    </Tilt>
                </motion.div>
            </section>
        </main>
    )
}
