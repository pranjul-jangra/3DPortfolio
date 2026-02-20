import { useState } from "react";
import { motion } from "motion/react";
import Tilt from 'react-parallax-tilt';
import { Github, Link, ChevronLeft, ChevronRight } from "lucide-react";
import useThemeStyles from "../hooks/useThemeStyles";


export default function ProjectCard({ project, variants }) {
    const [currentImg, setCurrentImg] = useState(0);
    const { title, images, description, stacks, liveLink, codeLink } = project;
    const { color, cardStyle, grayText, shadow, tagsStyle, border } = useThemeStyles();

    // Change image
    const nextImage = () => setCurrentImg((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);


    return (
        <motion.div variants={variants} className="h-full group">
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.02}
                scale={1.005}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                transitionSpeed={1000}
                className={`w-full min-w-[300px] h-full shadow-lg hover:shadow-md ${shadow} border ${border} rounded-2xl transition-all duration-[1.4s] overflow-hidden`}
            >
                <motion.div className={`group w-full h-full bg-gradient-to-br ${cardStyle} ${color} backdrop-blur-sm p-5 transition-shadow duration-300`}>
                    {/* Image container */}
                    <div className="relative w-full h-48 mb-4">
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

                        {/* Carousal dots */}
                        {
                            images.length > 1 && <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 rounded-full bg-black/30 p-1 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImg(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImg ? 'bg-white scale-110' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        }

                        {/* Carousal buttons */}
                        {images.length > 1 && (
                            <>
                                <button type="button" onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-200" aria-label="Previous Image">
                                    <ChevronLeft size={18} />
                                </button>
                                <button type="button" onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-200" aria-label="Next Image">
                                    <ChevronRight size={18} />
                                </button>
                            </>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className={`text-sm mb-4 ${grayText}`}>{description}</p>

                    <div className={`flex flex-wrap gap-2 text-sm font-mono mb-4`}>
                        {stacks.map((s, i) => (
                            <span key={i} className={`px-2 py-1 rounded-md ${tagsStyle}`}>#{s}</span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-teal-700/80 hover:bg-teal-700 text-white rounded-md transition-colors duration-300">
                            <Link className="w-4 h-4" />Live
                        </a>
                        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
                            <Github className="w-4 h-4" /> Code
                        </a>
                    </div>
                </motion.div>
            </Tilt>
        </motion.div>
    );
}