import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Github, Link, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCard({ isLightMode, project }) {
    const [currentImg, setCurrentImg] = useState(0);
    const { title, images } = project;

    // Change image
    const nextImage = () => setCurrentImg((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

    // Theme style
    const textColor = isLightMode ? "text-black" : "text-gray-100";
    const cardStyle = isLightMode
        ? "from-white via-gray-300/20 to-gray-300/30"
        : "from-[#1f1f1f]/80 to-[#2d2d2d]/90";
    const grayText = isLightMode ? "text-gray-700" : "text-gray-400";
    const shadow = isLightMode ? "shadow-[#606e821e] hover:shadow-[#606e822e]" : "shadow-[#000000]";
    const border = isLightMode ? "border-gray-200/60 hover:border-gray-300/60" : "border-zinc-800 hover:border-zinc-600/80";
    const tagsStyle = isLightMode ? "text-cyan-400 *:bg-cyan-900/70" : "text-cyan-400 *:bg-cyan-900/30";


    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.02}
            scale={1.01}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            transitionSpeed={1000}
            className={`w-full min-w-[300px] shadow-lg hover:shadow-md ${shadow} border ${border} rounded-2xl transition-all duration-[1.4s] overflow-hidden`}
        >
            <motion.div className={`group w-full bg-gradient-to-br ${cardStyle} ${textColor} backdrop-blur-sm p-5 transition-shadow duration-300`}>
                {/* Image container */}
                <div className="relative w-full h-48 mb-4">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={images[currentImg]}
                            src={images[currentImg]}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                    {images.length > 1 && (
                        <>
                            <button type="button" onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full" aria-label="Previous Image">
                                <ChevronLeft size={18} />
                            </button>
                            <button type="button" onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full" aria-label="Next Image">
                                <ChevronRight size={18} />
                            </button>
                        </>
                    )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className={`text-sm mb-4 ${grayText}`}>{project.description}</p>

                <div className={`flex flex-wrap gap-2 text-sm ${tagsStyle} font-mono mb-4`}>
                    {project.stacks.map((s, i) => (
                        <span key={i} className="px-2 py-1 rounded-md">#{s}</span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-teal-700/80 hover:bg-teal-700 text-white rounded-md transition-colors duration-300">
                        <Link className="w-5 h-5" />Live
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
                        <Github  className="w-5 h-5"/> Code
                    </a>
                </div>
            </motion.div>
        </Tilt>
    );
}
