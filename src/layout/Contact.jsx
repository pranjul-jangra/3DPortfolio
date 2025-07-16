import Navbar from '../components/Navbar';
import ParticleBackground from '../ui/ParticleBackground';
import ScrollIndicator from '../ui/ScrollIndicator';
import UseUpdatePageHeight from '../hooks/UseUpdatePageHeight';
import Email from '../components/Email';
import ThreeDScene from '../components/ThreeDScene';
import ContactOptions from '../components/ContactOptions';


export default function Contact({ isLightMode }) {
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


            <section className='w-full min-h-dvh pt-24 pb-20 px-16 flex flex-col justify-start items-start z-10'>
                {/* Form */}
                <div className='flex items-center gap-6 justify-between w-full'>
                    <div>
                        {/* <h1 className={`text-3xl font-bold mb-2 ${cyanText} transition-all duration-[1.4s]`}>Let’s build something impactful</h1>
                        <p className={`mb-7 transition-all duration-[1.4s] delay-[0.01s]`}>Got an idea, project, or opportunity? I’d love to hear from you.</p> */}
                        <h2 className={`text-3xl font-bold mb-2 ${cyanText} transition-all duration-[1.4s]`}>Why Contact Me?</h2>
                        <p className="text-base leading-relaxed max-w-xl mb-7">
                            Whether you're building something exciting, looking for a reliable full-stack developer,
                            or just want to bounce around ideas — I’m always open to meaningful conversations.
                            I care about clean code, thoughtful design, and delivering real value through development.
                        </p>

                        <Email isLightMode={isLightMode} />
                    </div>
                    <div className='w-full max-w-lg aspect-square shrink-0'>
                        <ThreeDScene />
                    </div>
                </div>


                {/* Why contact me */}
                {/* <h2 className={`text-3xl font-bold mb-2 mt-14 ${cyanText} transition-all duration-[1.4s]`}>Why Contact Me?</h2>
                <p className="text-base leading-relaxed max-w-xl">
                    Whether you're building something exciting, looking for a reliable full-stack developer,
                    or just want to bounce around ideas — I’m always open to meaningful conversations.
                    I care about clean code, thoughtful design, and delivering real value through development.
                    <br /><br />
                    Let's create something awesome together.
                </p> */}

                <h1 className={`text-3xl font-bold mb-2 mt-14 ${cyanText} transition-all duration-[1.4s]`}>Let’s build something impactful</h1>
                <p className={`mb-7 transition-all duration-[1.4s] delay-[0.01s]`}>Got an idea, project, or opportunity? I’d love to hear from you.</p>

                <ContactOptions isLightMode={isLightMode} />
            </section>
        </main>
    )
}
