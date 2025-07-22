import { useRef } from "react";
import { motion } from "motion/react";
import useThemeStyles from "../hooks/useThemeStyles";
import Tilt from 'react-parallax-tilt';

export default function SkillCard({ isLightMode, skill, variants }) {
  const containerRef = useRef();
  const divRef = useRef();
  const { color, grayText, cardBg, shadow, borderColor, skillTagStyle } = useThemeStyles();

  function handleMouseEnter() {
    if (divRef.current) {
      divRef.current.style.opacity = '1';
    }
  }

  function handleMouseLeave() {
    if (divRef.current) {
      divRef.current.style.opacity = '0';
    }
  }

  function handleMouseMove(e) {
    if (divRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;   // mouse pos - container pos
      const y = e.clientY - rect.top;

      divRef.current.style.left = `${x - 55}px`;
      divRef.current.style.top = `${y - 55}px`;
    }
  }


  return (
    <motion.div variants={variants}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.04}
        scale={1.02}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        transitionSpeed={1000}
        className={`rounded-3xl overflow-hidden w-full h-full border ${borderColor} shadow-lg ${shadow} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className={`relative overflow-hidden rounded-3xl w-full h-full hover:saturate-150 p-5 flex flex-col gap-3 items-center bg-gradient-to-br ${cardBg}`}
        >
          <p className={`px-2 py-0.5 text-xs font-medium rounded-full border ${skillTagStyle}`}>{skill.proficiency}</p>
          <img loading="lazy" className="w-12 h-12 p-1 my-0.5 flex items-center justify-center rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-md" style={{ boxShadow: `0 0 12px ${color}` }} src={skill.icon} alt="" />
          <p className={`text-lg font-semibold ${color} text-center`}>{skill.label}</p>
          <p className={`text-sm ${grayText} leading-snug text-center`}>{skill.description}</p>

          {/* Moving div */}
          <div ref={divRef} className={`absolute top-1/2 left-1/2 ${isLightMode ? "glowy-div-light" : "glowy-div-dark"}`}></div>
        </motion.div>
      </Tilt>
    </motion.div>
  )
}