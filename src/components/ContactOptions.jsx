import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';


export default function ContactOptions({ isLightMode }) {
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

    // Theme style
    const textColor = isLightMode ? "text-black" : "text-gray-100";
    const cardStyle = isLightMode
        ? "from-white via-gray-300/20 to-gray-300/30 border-gray-200/60 hover:border-gray-300/60 shadow-[#606e821e] hover:shadow-md hover:shadow-[#606e822e]"
        : "from-[#1f1f1f]/80 to-[#2d2d2d]/90 border-zinc-800 hover:border-zinc-600/80 shadow-[#000000] hover:shadow-md";
    const iconColor = isLightMode ? "text-blue-600" : "text-white";

    return (
        <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
        >
            {contacts.map(({ icon, label, link }) => (
                <Tilt
                    key={label}
                    glareEnable={true}
                    glareMaxOpacity={0.04}
                    scale={1.02}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    transitionSpeed={1000}
                    className="hover:-translate-y-1 transition-all duration-[1.4s]"
                >
                    <motion.a href={link} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 rounded-2xl border transition-all backdrop-blur-sm bg-gradient-to-br shadow-lg ${cardStyle}`}>
                        <span className={`text-xl ${iconColor}`}>{icon}</span>
                        <span className={`font-medium ${textColor}`}>{label}</span>
                    </motion.a>
                </Tilt>
            ))}
        </motion.div>
    )
}

