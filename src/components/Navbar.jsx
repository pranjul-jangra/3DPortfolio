import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


export default function Navbar({ isLightMode }) {
    const location = useLocation();
    const navRef = useRef();

    // Translate navbar
    useEffect(() => {
        const scrollTrigger = () => {
            if (window.scrollY > 30) {
                if (navRef.current) navRef.current.style.transform = "translateY(-120%)";
            } else if (window.scrollY > -20) {
                if (navRef.current) navRef.current.style.transform = "translateY(0)";
            }
        }
        window.addEventListener("scroll", scrollTrigger);

        return () => window.removeEventListener("scroll", scrollTrigger);
    }, []);

    // Conditional styles
    function activeTab(tab) {
        return location.pathname.includes(tab) ? "bg-black/70" : "bg-transparent";
    }

    function tabColor(tab) {
        return location.pathname.includes(tab) ? "text-white brightness-125 contrast-125" : "text-white/50";
    }

    const shadowColor = isLightMode ? "shadow-lg shadow-black/30" : "shadow-md shadow-zinc-800/20";
    const gradientColor = isLightMode ? "from-[#1a817cef] via-[#1a817cea] to-[#1a817ce3]" : "from-[#1a817c9a] via-[#1a817caf] to-[#1a817cbf]";


    return (
        <nav ref={navRef} className={`fixed top-5 left-1/2 -translate-1/2 z-50 px-5 pb-2 pt-3 rounded-b-[23px] text-white/85 bg-gradient-to-br ${gradientColor} font-semibold ${shadowColor} flex flex-nowrap items-center gap-10 transition-all duration-700 *:flex *:flex-col *:items-center *:text-shadow-2xs *:cursor-pointer`}>
            {/* Navigate to landing page */}
            <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white/50">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l9-8 9 8M4 10v10a1 1 0 001 1h5m10-11v10a1 1 0 01-1 1h-5" />
                </svg>
                <p className={`py-[1.5px] px-2.5 rounded-full}`}></p>
            </Link>

            {/* Other page navigation */}
            <Link to={'/about-me'} className={`${tabColor("about-me")}`}>
                <p>About</p>
                <p className={`py-[1.5px] px-2.5 rounded-full ${activeTab("about-me")}`}></p>
            </Link>

            <Link to={'/skills'} className={`${tabColor("skills")}`}>
                <p>Skills</p>
                <p className={`py-[1.5px] px-2.5 rounded-full ${activeTab("skills")}`}></p>
            </Link>

            <Link to={'/projects'} className={`${tabColor("projects")}`}>
                <p>Projects</p>
                <p className={`py-[1.5px] px-2.5 rounded-full ${activeTab("projects")}`}></p>
            </Link>

            <Link to={`/experience`} className={`${tabColor("experience")}`}>
                <p>Experience</p>
                <p className={`py-[1.5px] px-2.5 rounded-full ${activeTab("experience")}`}></p>
            </Link>

            <Link to={'/contact-me'} className={`${tabColor("contact-me")}`}>
                <p>Contact</p>
                <p className={`py-[1.5px] px-2.5 rounded-full ${activeTab("contact-me")}`}></p>
            </Link>
        </nav>
    )
}
