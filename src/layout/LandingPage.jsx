import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Github, Moon, Sun } from "lucide-react"
import "./layouts.scss"
import Logo from "../components/Logo"
import { useNavigate } from "react-router-dom"
import DisplacementSphere from './Test/DisplacementSphere'
import ParticleBackground from '../ui/ParticleBackground'



export default function LandingPage({ isLightMode, themeSetter }) {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [text, setText] = useState("Full Stack Developer");

    useEffect(() => {
        const visibeTl = setTimeout(() => { setVisible(true); }, 350);
        return () => clearTimeout(visibeTl);
    }, []);

    // Conditional styles
    const opacity = visible ? 'opacity-100' : 'opacity-0';
    const translate = visible ? "translate-y-0" : "translate-y-4";
    const bgColor = isLightMode ? "from-gray-100 via-gray-100/50 to-white" : "from-black/96 via-black/94 to-black/90";
    const color = isLightMode ? "text-black" : "text-gray-100";
    const fillColor = isLightMode ? "#000000ce" : "#ffffffd2";
    const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";
    const cardBg = isLightMode ? "from-white via-gray-200/50 to-gray-300/20 shadow-black/5" : "from-zinc-900/96 via-zinc-800/94 to-zinc-800/90 shadow-gray-800/40";

    // Variants
    const navParentVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: -0.03,
            },
        },
        exit: {},
    };

    const navItemVariants = {
        initial: { y: -180, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
        exit: { y: -180, opacity: 0 },
    };

    // Typing effect
    useEffect(() => {
        const titles = ["Full Stack Developer", "MERN Stack Developer"];
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentTitle = titles[currentIndex];
            const updatedText = isDeleting ? currentTitle.substring(0, charIndex--) : currentTitle.substring(0, charIndex++);
            setText(updatedText);

            if (!isDeleting && charIndex === currentTitle.length + 1) {
                setTimeout(() => (isDeleting = true), 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % titles.length;
            }

            const timeout = isDeleting ? 50 : 100;
            setTimeout(type, timeout);
        };

        const delay = setTimeout(type, 1000);
        return () => clearTimeout(delay);
    }, []);


    return (
        <>
            <main className={`w-full h-screen bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
                <ParticleBackground isLightMode={isLightMode} />

                {/* Intro overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-4 z-20 sm:p-8 md:p-16">
                    <div className="max-w-2xl">
                        <p className={`text-2xl max-sm:text-3xl tracking-widest uppercase mb-3.5 font-extrabold ${translate} ${opacity} transition-all duration-[1.4s] ${window.innerWidth >= 768 ? cyanText : ""}`}>Pranjul</p>
                        <h1 translate="no" className={`text-4xl md:text-6xl lg:text-7xl max-sm:text-[25px] leading-tight font-semibold whitespace-nowrap typing-cursor ${translate} ${opacity} transition-all duration-[1.4s] delay-75`}>
                            {text}
                        </h1>
                        <p className={`text-md max-sm:text-sm tracking-widest uppercase mt-4 font-semibold ${translate} ${opacity} transition-all duration-[1.55s]`}>Building seamless web experiences with MERN & modern tools.</p>
                    </div>
                </div>

                {/* Overlay gradient */}
                <div className={`absolute inset-0 w-dvw h-dvh z-10 backdrop-blur-[0.1px] ${isLightMode ? "" : "dark-gradient"}`}></div>

                {/* Displacement sphere */}
                <div className={`${opacity} transition-opacity duration-[2s]`}>
                    <DisplacementSphere isLightMode={isLightMode} />
                </div>

                {/* Navigation */}
                <nav className="absolute top-4 right-4 md:right-8 md:top-8 z-30 text-black">
                    <button type="button" aria-label={showNav ? "Close navbar" : "Open navbar"} onClick={() => setShowNav(prev => !prev)} className={`w-12 h-12 p-2 flex items-center justify-center cursor-pointer ${translate} ${opacity} transition-all duration-500 text-white`}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line className={`origin-center transition-transform duration-700 ${showNav ? "translate-y-[4.5px] rotate-45" : ""}`} x1="3" y1="6" x2="21" y2="6" />
                            <line className={`transition-opacity duration-200 ${showNav ? "opacity-0" : "opacity-500"}`} x1="3" y1="12" x2="21" y2="12" />
                            <line className={`origin-center transition-transform duration-700 ${showNav ? "-translate-y-[4px] -rotate-45" : ""}`} x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </nav>


                {/* Logo */}
                <div className={`absolute top-4 left-4 md:left-8 md:top-8 z-30 ${translate} ${opacity} cursor-default transition-all duration-[1.6s]`}><Logo isLightMode={isLightMode} /></div>

                {/* Github | Linkedin */}
                <div className={`flex items-center gap-8 absolute bottom-4 left-4 md:left-8 md:bottom-8 font-mono z-20 px-3 py-2 ${translate} ${opacity} transition-all duration-[1.6s] delay-75 backdrop-blur-2xl bg-gradient-to-br ${cardBg} shadow-inner rounded-3xl`}>
                    <a className={`w-6.5 group aspect-square`} data-social="GitHub" id="githubLogo" href="https://github.com/pranjul-jangra?tab=overview&from=2024-09-01&to=2024-09-30" target="_blank" aria-label="Github profile">
                        <svg className="group-hover:scale-105 transition-transform duration-150" fill={fillColor} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16">
                            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                        </svg>
                    </a>

                    <a className={`w-8 group aspect-square flex justify-center items-center`} data-social="LinkedIn" id="linkedInLogo" href="https://www.linkedin.com/in/pranjul-jangra-107700332/" target="_blank" aria-label="LinkedIn profile">
                        <svg className="w-[70%] group-hover:scale-105 transition-transform duration-150" fill={fillColor} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                            <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" fillRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </main>



            {/* Nav elements */}
            <AnimatePresence>
                {showNav && <motion.nav
                    initial={{ backdropFilter: "blur(0)", y: -250, opacity: 0 }}
                    animate={{ backdropFilter: "blur(10px)", y: 0, opacity: 1 }}
                    exit={{ backdropFilter: "blur(0)", y: -300, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-dvw h-dvh fixed inset-0 z-20 flex justify-center items-center gap-4 ${color} bg-gradient-to-br from-black/40 via-black/35 to-black/30`}
                    onClick={() => setShowNav(prev => !prev)}
                >
                    {/* Links */}
                    <motion.article
                        variants={navParentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-start gap-4 w-40 *:font-bold *:text-2xl *:cursor-pointer *:w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.p variants={navItemVariants} className="nav-items" onClick={() => navigate("/about-me")}>About me</motion.p>
                        <motion.p variants={navItemVariants} className="nav-items" onClick={() => navigate("/skills")}>Skills</motion.p>
                        <motion.p variants={navItemVariants} className="nav-items" onClick={() => navigate("/projects")}>Projects</motion.p>
                        <motion.p variants={navItemVariants} className="nav-items" onClick={() => navigate("/experience")}>Experience</motion.p>
                        <motion.p variants={navItemVariants} className="nav-items" onClick={() => navigate("/contact-me")}>Contact</motion.p>
                    </motion.article>


                    {/* Theme changer */}
                    {
                        isLightMode
                            ?
                            <motion.div
                                initial={{ opacity: 0.2, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.14 } }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                                key={"dark"}
                                className="absolute bottom-9 right-9 w-10 aspect-square cursor-pointer" onClick={e => { e.stopPropagation(); themeSetter(); }}>
                                <Moon className="w-full h-full" />
                            </motion.div>
                            :
                            <motion.div
                                initial={{ opacity: 0.2, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.14 } }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                                key={'light'}
                                className="absolute bottom-9 right-9 w-10 aspect-square cursor-pointer" onClick={e => { e.stopPropagation(); themeSetter(); }}>
                                <Sun className="w-full h-full" />
                            </motion.div>
                    }
                </motion.nav>}
            </AnimatePresence>
        </>
    )
}
