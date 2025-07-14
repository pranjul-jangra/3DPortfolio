import { useState, useEffect, useRef, useMemo } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../ui/ParticleBackground';
import SkillCard from '../ui/SkillCard';
import { skills } from '../utils/skills';
import './layouts.scss'
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';


export default function Skills({ isLightMode }) {
  const pageInfo = UseUpdatePageHeight();

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

  // Conditional styles
  const opacity = visible ? 'opacity-100' : 'opacity-0';
  const translate = visible ? "translate-y-0" : "translate-y-5";
  const bgColor = isLightMode ? "from-gray-100/50 via-gray-100/30 to-gray-100/10" : "from-black/96 via-black/94 to-black/90";
  const color = isLightMode ? "text-black" : "text-gray-100";
  const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";

  const headerAnimation = useMemo(() => {
    return (header) => {
      return showSection[header] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7";
    };
  }, [showSection]);

  // Variants
  const parentVariant = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };



  return (
    <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
      <Navbar isLightMode={isLightMode} />
      <ParticleBackground isLightMode={isLightMode} />
      <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


      <section className='w-full max-w-7xl min-h-dvh pt-24 pb-20 px-16 flex flex-col justify-center items-start z-10'>
        <h1 className={`text-3xl font-bold mb-2 ${cyanText} ${opacity} ${translate} transition-all duration-[1.1s]`}>What I’m Good At</h1>
        <p className={`${opacity} ${translate} transition-all duration-[1.1s] delay-[0.02s]`}>My approach to skill development is purpose-driven: I learn technologies as needed to solve real problems and deliver effective solutions. Through hands-on experience across diverse projects, I’ve gained a solid understanding of various tools and frameworks. These skills represent what I can confidently apply in real-world scenarios — not just what I’ve studied in theory.</p>


        <h2 ref={frontendRef} className={`text-3xl font-bold mt-16 mb-6 ${cyanText} ${headerAnimation("frontend")} transition-all duration-[1.7s] delay-[0.05s]`}>Frontend</h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.frontend ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Frontend").map((skill, i) => (
              <SkillCard variants={childVariants} key={`frontend-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        <h2 ref={backendRef} className={`text-3xl font-bold mt-16 mb-6 ${cyanText} ${headerAnimation("backend")} transition-all duration-[1.7s] delay-[0.02s]`}>Backend</h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.backend ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Backend").map((skill, i) => (
              <SkillCard variants={childVariants} key={`backend-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        <h2 ref={animationsRef} className={`text-3xl font-bold mt-16 mb-6 ${cyanText} ${headerAnimation("animations")} transition-all duration-[1.7s] delay-[0.02s]`}>Animations & Transitions</h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.animations ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Animations & Transitions").map((skill, i) => (
              <SkillCard variants={childVariants} key={`animations-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        <h2 ref={othersRef} className={`text-3xl font-bold mt-16 mb-6 ${cyanText} ${headerAnimation("others")} transition-all duration-[1.7s] delay-[0.02s]`}>Other Stacks & Tools</h2>
        <motion.div variants={parentVariant} initial="initial" animate={showSection.others ? "animate" : ""} className='skills-grid gap-8 w-full'>
          {
            skills.filter(s => s.category === "Other Stacks & Tools").map((skill, i) => (
              <SkillCard variants={childVariants} key={`other-${i}`} skill={skill} isLightMode={isLightMode} />
            ))
          }
        </motion.div>

        <h2 ref={devopsRef} className={`text-3xl font-bold mt-16 mb-6 ${cyanText} ${headerAnimation("devops")} transition-all duration-[1.7s] delay-[0.02s]`}>Version Control & Hosting</h2>
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
