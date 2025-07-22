import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import useThemeStyles from "../hooks/useThemeStyles";

const contacts = [
    {
        icon: <Mail />,
        label: "Email",
        link: "mailto:pranjuljan68@gmail.com",
    },
    {
        icon: <Phone />,
        label: "Phone",
        link: "tel:+919812471042",
    },
    {
        icon: <Github />,
        label: "GitHub",
        link: "https://github.com/pranjul-jangra",
    },
    {
        icon: <Linkedin />,
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/pranjul-jangra-107700332/",
    },
];


export default function ContactOptions() {
    const { color, cardStyle } = useThemeStyles();
    const containerRef = useRef();
    const [isContainerInView, setIsContainerInView] = useState(false);

    const isInView = useInView(containerRef, { margin: '-70px' });

    useEffect(()=>{
        if(!isContainerInView && isInView) setIsContainerInView(true);
    }, [isInView, isContainerInView]);

    // Variants
    const parentVariant = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.1,
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
    };

    const childVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 1.1 } }
    };

    return (
        <motion.div
            ref={containerRef}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl mx-auto px-4"
            variants={parentVariant} initial="initial" animate={isContainerInView ? "animate" : ""}
        >
            {contacts.map(({ icon, label, link }) => (
                <motion.div key={label} variants={childVariants}>
                <Tilt
                    key={label}
                    glareEnable={true}
                    glareMaxOpacity={0.04}
                    scale={1.02}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    transitionSpeed={1000}
                    className="hover:-translate-y-1 transition-all duration-[1.1s]"
                >
                    <motion.a href={link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 rounded-2xl border transition-all backdrop-blur-sm bg-gradient-to-br shadow-lg ${cardStyle}`}>
                        <span className={`text-xl ${color}`}>{icon}</span>
                        <span className={`font-medium ${color}`}>{label}</span>
                    </motion.a>
                </Tilt>
                </motion.div>
            ))}
        </motion.div>
    )
}

