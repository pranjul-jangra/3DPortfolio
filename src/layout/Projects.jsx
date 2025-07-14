import ParticleBackground from '../ui/ParticleBackground';
import Navbar from '../components/Navbar';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import './layouts.scss'


export default function Projects({ isLightMode }) {
    const pageInfo = UseUpdatePageHeight();


    // Conditional styles
    // const opacity = visible ? 'opacity-100' : 'opacity-0';
    // const translate = visible ? "translate-y-0" : "translate-y-5";
    const bgColor = isLightMode ? "from-gray-100/50 via-gray-100/30 to-gray-100/10" : "from-black/96 via-black/94 to-black/90";
    const color = isLightMode ? "text-black" : "text-gray-100";
    const cyanText = isLightMode ? "text-teal-700/90" : "text-teal-500";


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar isLightMode={isLightMode} />
            <ParticleBackground isLightMode={isLightMode} />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            <section className='w-full max-w-7xl min-h-dvh pt-24 pb-20 px-16 flex flex-col justify-center items-start z-10'>
                <h1 className={`text-3xl font-bold mb-2 ${cyanText} transition-all duration-[1.1s]`}>Projects That Define My Craft</h1>
                <p className={`mb-2 transition-all duration-[1.1s] delay-[0.01s]`}>Projects where design, animation, and UI/UX take the spotlight.</p>
                <p className={`transition-all duration-[1.1s] delay-[0.01s]`}>Each project reflects my passion for clean design, seamless interaction, and purposeful user experiences. From animated interfaces to intuitive layouts, these builds demonstrate not just technical skill — but thoughtful execution that puts users first.</p>

                {/* Full-stack projects */}
                <h2 className={`text-3xl font-bold mt-16 mb-6 ${cyanText} transition-all duration-[1.7s] delay-[0.05s]`}>Full-Stack Projects</h2>
                <div className='projects-grid gap-6 w-full'>
                {
                    projects?.filter(p => p.type === "MERN")?.map((p, i) => (
                        <ProjectCard key={`frontend-project-${i}`} project={p} isLightMode={isLightMode} />
                    ))
                }
                </div>

                {/* Frontend projects */}
                <h2 className={`text-3xl font-bold mt-16 mb-6 ${cyanText} transition-all duration-[1.7s] delay-[0.05s]`}>Frontend Projects</h2>
                <div className='projects-grid gap-6 w-full'>
                {
                    projects?.filter(p => p.type === "Frontend")?.map((p, i) => (
                        <ProjectCard key={`frontend-project-${i}`} project={p} isLightMode={isLightMode} />
                    ))
                }
                </div>
            </section>
        </main>
    )
}
