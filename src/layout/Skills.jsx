import { useState, useEffect, useRef, useMemo } from 'react';
import { useInView, motion } from 'motion/react';
import Navbar from '../components/Navbar';
import SkillCard from '../ui/SkillCard';
import { skills } from '../utils/skills';
import './layouts.scss'
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import useThemeStyles from '../hooks/useThemeStyles';
import ParticleBackground from '../ui/ParticleBackground';


export default function Skills({ isLightMode }) {
  const pageInfo = UseUpdatePageHeight();
  const { bgColor, color, cyanText } = useThemeStyles();

  const [visible, setVisible] = useState(false);
  const [showSection, setShowSection] = useState({ frontend: false, backend: false, animations: false, others: false, devops: false });

  const frontendRef = useRef();
  const backendRef = useRef();
  const animationsRef = useRef();
  const othersRef = useRef();
  const devopsRef = useRef();

  const frontendInView = useInView(frontendRef, { margin: "-110px" });
  const backendInView = useInView(backendRef, { margin: "-110px" });
  const animationsInView = useInView(animationsRef, { margin: "-110px" });
  const othersInView = useInView(othersRef, { margin: "-110px" });
  const devopsInView = useInView(devopsRef, { margin: "-110px" });

  useEffect(() => {
    if (frontendInView && !showSection.frontend) return setShowSection(prev => ({ ...prev, frontend: true }));
    if (backendInView && !showSection.backend) return setShowSection(prev => ({ ...prev, backend: true }));
    if (animationsInView && !showSection.animations) return setShowSection(prev => ({ ...prev, animations: true }));
    if (othersInView && !showSection.others) return setShowSection(prev => ({ ...prev, others: true }));
    if (devopsInView && !showSection.devops) return setShowSection(prev => ({ ...prev, devops: true }));

  }, [frontendInView, backendInView, animationsInView, othersInView, devopsInView]);

  useEffect(() => {
    const tl = setTimeout(() => setVisible(true), 350);
    return () => clearTimeout(tl);
  }, []);

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
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }} className={`text-3xl font-bold mb-2 ${cyanText}`}>What I’m Good At</motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.1 }}>My approach to skill development is purpose-driven: I learn technologies as needed to solve real problems and deliver effective solutions. Through hands-on experience across diverse projects, I’ve gained a solid understanding of various tools and frameworks. These skills represent what I can confidently apply in real-world scenarios — not just what I’ve studied in theory.</motion.p>

        {/* Frontend stacks */}
        <motion.h2
          ref={frontendRef}
          className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
          initial={{ opacity: 0, y: 40 }}
          animate={(showSection.frontend && visible) ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          Frontend
        </motion.h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.frontend ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Frontend").map((skill, i) => (
              <SkillCard variants={childVariants} key={`frontend-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        {/* Backend stacks */}
        <motion.h2
          ref={backendRef}
          className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
          initial={{ opacity: 0, y: 40 }}
          animate={(showSection.backend && visible) ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          Backend
        </motion.h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.backend ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Backend").map((skill, i) => (
              <SkillCard variants={childVariants} key={`backend-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        {/* Animation stacks */}
        <motion.h2
          ref={animationsRef}
          className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
          initial={{ opacity: 0, y: 40 }}
          animate={(showSection.animations && visible) ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          Animations & Transitions
        </motion.h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.animations ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Animations & Transitions").map((skill, i) => (
              <SkillCard variants={childVariants} key={`animations-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        {/* Other stacks */}
        <motion.h2
          ref={othersRef}
          className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
          initial={{ opacity: 0, y: 40 }}
          animate={(showSection.others && visible) ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          Other Stacks & Tools
        </motion.h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.others ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Other Stacks & Tools").map((skill, i) => (
              <SkillCard variants={childVariants} key={`other-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        {/* Devops stacks */}
        <motion.h2
          ref={devopsRef}
          className={`text-3xl font-bold mt-16 mb-6 ${cyanText}`}
          initial={{ opacity: 0, y: 40 }}
          animate={(showSection.devops && visible) ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1 }}
        >
          Version Control & Hosting
        </motion.h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.devops ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Version Control & Hosting").map((skill, i) => (
              <SkillCard variants={childVariants} key={`devops-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

      </section>
    </main>
  )
}
