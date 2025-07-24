import Navbar from '../components/Navbar'
import ScrollIndicator from '../ui/ScrollIndicator'
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight'
import useThemeStyles from '../hooks/useThemeStyles'
import ParticleBackground from '../ui/ParticleBackground';


export default function Experience() {
    const pageInfo = UseUpdatePageHeight();
    const { bgColor, color, cyanText } = useThemeStyles();


    return (
        <main className={`w-full min-h-dvh flex flex-col items-center bg-gradient-to-br relative overflow-hidden ${color} ${bgColor} transition-colors duration-150`}>
            <Navbar />
            <ParticleBackground />
            <ScrollIndicator totalHeight={pageInfo.totalHeight} viewportHeight={pageInfo.visibleHeight} />


            <section className='w-full max-w-7xl min-h-dvh pt-24 pb-20 px-16 max-lg:px-8 max-sm:px-4 flex flex-col justify-center items-start z-10'>
                <h1 className={`text-3xl font-bold mb-2 ${cyanText} transition-all duration-[1.1s]`}>My Journey in Practice</h1>
                <p className={`mb-2 transition-all duration-[1.1s] delay-[0.01s]`}>Though I haven't worked professionally yet, my experience comes from building projects with real-world challenges — where I’ve had to learn, adapt, and apply solutions just like in a production setting.</p>
            
            
            </section>
        </main>
    )
}
