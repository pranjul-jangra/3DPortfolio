import { Mail, MapPin, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import useThemeStyles from "../hooks/useThemeStyles";

export default function Footer() {
    const { color, grayText, footerBg, footerBorder, grayBg } = useThemeStyles();

    return (
        <footer className={`relative bg-gradient-to-br ${footerBg} ${color} border-t ${footerBorder} overflow-hidden`}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">

                        {/* Brand Section - Takes 2 columns on large screens */}
                        <div className="md:col-span-2 lg:col-span-2">
                            <div className="mb-6">
                                <Logo />
                            </div>
                            <p className="text-base leading-relaxed max-w-md mb-8 opacity-90">
                                Building seamless digital experiences with modern web technologies.
                                Passionate about clean design and powerful functionality.
                            </p>

                            {/* Contact Info with better styling */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 group">
                                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Mail size={16} />
                                    </div>
                                    <a href="mailto:pranjuljan68@gmail.com"
                                        className="text-sm hover:opacity-75 transition-opacity">
                                        pranjuljan68@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-white/10">
                                        <MapPin size={16} />
                                    </div>
                                    <span className="text-sm">Haryana, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 relative">
                                Quick Links
                                <div className={`absolute -bottom-2 left-0 w-8 h-0.5 ${grayBg} rounded-full`}></div>
                            </h4>
                            <nav className="space-y-4">
                                {[
                                    { to: '/about-me', label: 'About me' },
                                    { to: '/skills', label: 'Skills' },
                                    { to: '/projects', label: 'Projects' },
                                    { to: '/contact-me', label: 'Contact' }
                                ].map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-200 group"
                                    >
                                        <span>{link.label}</span>
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 relative">
                                Connect
                                <div className={`absolute -bottom-2 left-0 w-8 h-0.5 ${grayBg} rounded-full`}></div>
                            </h4>
                            <div className="space-y-4">
                                {/* Social Media Links */}
                                <div className="flex gap-3">
                                    {[
                                        { icon: Github, label: 'GitHub', href: 'https://github.com/pranjul-jangra?tab=overview' },
                                        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranjul-jangra-107700332/' },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className={`p-3 rounded-xl ${grayBg} hover:scale-110 transition-all duration-200 group`}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={18} className="group-hover:rotate-12 transition-transform" />
                                        </a>
                                    ))}
                                </div>

                                {/* Call to action */}
                                <div className="pt-4">
                                    <p className="text-xs opacity-70 mb-3">Let's work together</p>
                                    <Link to="/contact-me" className={`inline-flex items-center gap-2 px-4 py-2 ${grayBg} rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105`}>
                                        Get in touch
                                        <ExternalLink size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section with enhanced styling */}
                    <div className={`relative mt-16 pt-8 border-t ${footerBorder} flex flex-col md:flex-row justify-center items-center gap-4`}>
                        <div className={`text-sm ${grayText} flex items-center gap-2`}>
                            <span>&copy; {new Date().getFullYear()} Pranjul Jangra.</span>
                            <span className="hidden md:inline">•</span>
                            <span>All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}