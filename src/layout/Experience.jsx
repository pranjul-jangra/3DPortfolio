import React from 'react'
import Navbar from '../components/Navbar'
import ParticleBackground from '../ui/ParticleBackground'
import ScrollIndicator from '../ui/ScrollIndicator'
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight'


export default function Experience({ isLightMode }) {
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
                <h1 className={`text-3xl font-bold mb-2 ${cyanText} transition-all duration-[1.1s]`}>My Journey in Practice</h1>
                <p className={`mb-2 transition-all duration-[1.1s] delay-[0.01s]`}>Though I haven't worked professionally yet, my experience comes from building projects with real-world challenges — where I’ve had to learn, adapt, and apply solutions just like in a production setting.</p>
            
            
            </section>
        </main>
    )
}
