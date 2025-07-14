import { useRef, useState, useEffect } from 'react'
import { useInView, motion } from 'motion/react';
import { educations } from '../utils/eduDetails';
import './components.scss'


export default function AcademicDetail({ isLightMode }) {
    // Animate items and paragraph separatly
    const [animateChilds, setAnimateChilds] = useState(false);
    const [animatePara, setAnimatePara] = useState(false);

    const parentRef = useRef();
    const paraRef = useRef();

    const isParentInView = useInView(parentRef, { margin: "-140px" });
    const IsParaInView = useInView(paraRef, { margin: "-90px" });

    useEffect(() => {
        if(isParentInView && !animateChilds) setAnimateChilds(true);
        if(IsParaInView && !animatePara) setAnimatePara(true);
    }, [isParentInView, IsParaInView]);

    // Conditional styles
    const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";
    const grayText = isLightMode ? "text-gray-800" : "text-gray-300/90";

    // Variants
    const parentVariant = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        },
    }

    const childVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1 } },
    }


    return (
        <motion.section
            ref={parentRef}
            variants={parentVariant}
            initial="initial"
            animate={animateChilds && "animate"}
            className='w-full min-h-dvh pt-10 pb-10'
        >
            <motion.h1 variants={childVariants} className={`text-4xl font-bold ${cyanText}`}>Academic Details</motion.h1>

            {/* Container for academic items */}
            <motion.div initial={{ y: 40, opacity: 0 }} animate={animateChilds && { y: 0, opacity: 1, transition: { duration: 1 } }} className='*:grid *:gap-12 *:ml-9 *:mt-10 border-l-2 border-l-gray-400 *:border-b *:border-b-gray-500/10 *:pb-3'>
                {educations.map((item, index) => (
                    <motion.div key={index} variants={childVariants} className='highlighting-dot grid-columns'>
                        <div>
                            <p className='text-lg font-semibold tracking-wide'>{item.degree}</p>
                            <p className={`${grayText} text-sm`}>{item.year}</p>
                        </div>
                        <div>
                            <p className='text-lg font-semibold tracking-wide'>{item.school}</p>
                            <p className={`${grayText}`}>{item.board}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            <div ref={paraRef}>
                <motion.p initial={{ y: 50, opacity: 0 }} animate={animatePara && { y: 0, opacity: 1, transition: { duration: 1 } }} className='mt-10'>
                    My academic path reflects a steady progression from foundational concepts to specialized computer science knowledge. I believe in continuous learning and am committed to expanding my technical expertise through practical application and ongoing study.
                </motion.p>
            </div>
        </motion.section>
    )
}

