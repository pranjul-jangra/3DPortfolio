import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Home, Wrench, FolderKanban, Briefcase, Mail, UserCircle2Icon } from "lucide-react";
import useThemeStyles from "../hooks/useThemeStyles";

export default function Navbar() {
    const location = useLocation();
    const navRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const { navShadow, navgradient } = useThemeStyles();

    // scroll handler with threshold
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const scrollTrigger = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 30 && lastScrollY <= 30) {
                setIsVisible(false);
            } else if (currentScrollY <= 30 && lastScrollY > 30) {
                setIsVisible(true);
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(scrollTrigger);
                ticking = true;
            }
        };

        window.addEventListener("scroll", requestTick, { passive: true });
        return () => window.removeEventListener("scroll", requestTick);
    }, []);

    function isActive(tab) {
        return location.pathname.includes(tab) || (tab === "/" && location.pathname === "/");
    }

    function tabClasses(tab) {
        const active = isActive(tab);
        return `${active ? "text-white brightness-125 contrast-125" : "text-white/50"} transition-colors duration-200`;
    }

    return (
        <nav 
            ref={navRef} 
            className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 px-5 p-2.5 rounded-[23px] text-white/85 bg-gradient-to-br ${navgradient} font-semibold ${navShadow} flex flex-nowrap items-center gap-5 max-sm:gap-6 *:flex *:flex-row *:items-center *:gap-2 *:text-shadow-2xs *:cursor-pointer transition-transform duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}
        >
            <NavLink to={"/"} className="text-white/50" aria-label="Navigate to landing page">
                <Home className="w-5 h-5" />
            </NavLink>

            <NavLink to={'/about-me'} title="About me" className={tabClasses("about-me")} aria-label="Navigate to about page">
                <UserCircle2Icon className="w-5 h-5 shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 ${isActive("about-me") ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-[-8px]"} overflow-hidden`}>
                    About
                </span>
            </NavLink>

            <NavLink to={'/skills'} title="Skills" className={tabClasses("skills")} aria-label="Navigate to skills page">
                <Wrench className="w-5 h-5 shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 ${isActive("skills") ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-[-8px]"} overflow-hidden`}>
                    Skills
                </span>
            </NavLink>

            <NavLink to={'/projects'} title="Projects" className={tabClasses("projects")} aria-label="Navigate to projects page">
                <FolderKanban className="w-5 h-5 shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 ${isActive("projects") ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-[-8px]"} overflow-hidden`}>
                    Projects
                </span>
            </NavLink>

            <NavLink to={`/experience`} title="Experience" className={tabClasses("experience")} aria-label="Navigate to experience page">
                <Briefcase className="w-5 h-5 shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 ${isActive("experience") ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-[-8px]"} overflow-hidden`}>
                    Experience
                </span>  
            </NavLink>

            <NavLink to={'/contact-me'} title="Contact" className={tabClasses("contact-me")} aria-label="Navigate to contact page">
                <Mail className="w-5 h-5 shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-200 ${isActive("contact-me") ? "w-auto opacity-100 ml-0" : "w-0 opacity-0 ml-[-8px]"} overflow-hidden`}>
                    Contact
                </span>
            </NavLink>
        </nav>
    )
}