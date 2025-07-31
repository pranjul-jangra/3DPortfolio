import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BrainCircuit, Briefcase, FolderOpen, Mail, Moon, NotebookText, Sun, UserCircle2Icon } from "lucide-react";
import useThemeStyles from "../hooks/useThemeStyles";


export default function RootNavigations({ setShowNav, isLightMode, themeSetter }) {
    const { color, shadow } = useThemeStyles();


    return (
        <motion.nav
            initial={{ backdropFilter: "blur(0)", y: -250, opacity: 0 }}
            animate={{ backdropFilter: "blur(10px)", y: 0, opacity: 1 }}
            exit={{ backdropFilter: "blur(0)", y: -300, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`w-dvw h-dvh fixed inset-0 z-20 flex justify-center items-center gap-4 ${color} `}
            onClick={() => setShowNav(prev => !prev)}
        >
            {/* Links */}
            <motion.article
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                exit={{ y: -90, opacity: 0 }}
                className={`grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 *:w-40 *:h-20 *:rounded-xl *:flex *:items-center *:justify-start *:gap-2 *:backdrop-blur-3xl ${isLightMode ? "*:bg-white/20" : "*:bg-black/20"} *:p-4 *:shadow-lg *:hover:shadow-md *:hover:-translate-y-1.5 *:transition-all *:duration-200`}
                onClick={(e) => e.stopPropagation()}
            >
                <Link className={`${shadow}`} to={'/about-me'}><UserCircle2Icon /> About</Link>
                <Link className={`${shadow}`} to={'/skills'}><BrainCircuit /> Skills</Link>
                <Link className={`${shadow}`} to={'/projects'}><FolderOpen /> Projects</Link>
                <Link className={`${shadow}`} to={'/experience'}><Briefcase /> Experience</Link>
                <Link className={`${shadow}`} to={'/contact-me'}><Mail /> Contact</Link>
                <Link className={`${shadow}`} to={'/blog'}><NotebookText /> Blog</Link>
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
        </motion.nav>
    )
}
