import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import Email from '../components/Email';
import ThreeDScene from '../components/ThreeDScene';
import ContactOptions from '../components/ContactOptions';
import useThemeStyles from '../hooks/useThemeStyles';
import ParticleBackground from '../ui/ParticleBackground';


export default function Contact() {
    const pageInfo = UseUpdatePageHeight();
    const { bgColor, color, cyanText } = useThemeStyles();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const visibeTl = setTimeout(() => setVisible(true), 350);
        return () => clearTimeout(visibeTl);
    }, []);


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar />
            <ParticleBackground />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            <section className='w-full min-h-dvh pt-24 pb-20 px-16 flex flex-col justify-start items-start z-10'>
                {/* Form */}
                <div className='flex items-center gap-6 justify-between w-full'>
                    <div>
                        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className={`text-3xl font-bold mb-2 ${cyanText}`}>Why Contact Me?</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className="text-base leading-relaxed max-w-xl mb-7">
                            Whether you're building something exciting, looking for a reliable full-stack developer,
                            or just want to bounce around ideas — I’m always open to meaningful conversations.
                            I care about clean code, thoughtful design, and delivering real value through development.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }}>
                            <Email />
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className='w-full max-w-lg aspect-square shrink-0'>
                        <ThreeDScene />
                    </motion.div>
                </div>


                <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-110px" }} transition={{ duration: 1.1 }} className={`text-3xl font-bold mb-2 mt-14 ${cyanText}`}>Let’s build something impactful</motion.h1>
                <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-110px" }} transition={{ duration: 1.1 }} className={`mb-7`}>Got an idea, project, or opportunity? I’d love to hear from you.</motion.p>

                <ContactOptions />
            </section>
        </main>
    )
}
