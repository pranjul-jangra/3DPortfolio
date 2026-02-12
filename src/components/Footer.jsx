import { Mail, MapPin, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import useThemeStyles from "../hooks/useThemeStyles";

export default function Footer() {
    const { color, grayText, footerBg, footerBorder, grayBg, border, cardBg } = useThemeStyles();

    return (
        <footer className={`relative bg-gradient-to-br ${footerBg} ${color} border-t ${footerBorder} overflow-hidden`}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">

                    {/* Main Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Brand Section */}
                        <div>
                            <div className="mb-6">
                                <Logo />
                            </div>

                            <p className="text-base leading-relaxed max-w-md mb-8 opacity-90">
                                Building seamless digital experiences with modern web technologies.
                                Passionate about clean design and powerful functionality.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 group">
                                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Mail size={16} />
                                    </div>
                                    <a
                                        href="mailto:pranjuljan68@gmail.com"
                                        className="text-sm hover:opacity-75 transition-opacity"
                                    >
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

                        {/* Connect Section */}
                        <div className="md:justify-self-end md:text-right">
                            <h4 className="text-lg font-semibold mb-6 relative inline-block">
                                Connect
                                <div className={`absolute -bottom-2 left-0 md:left-auto md:right-0 w-8 h-0.5 ${grayBg} rounded-full`}></div>
                            </h4>

                            <div className="space-y-6">
                                <div className="flex gap-3 md:justify-end">
                                    {[
                                        { icon: Github, label: "GitHub", href: "https://github.com/pranjul-jangra?tab=overview" },
                                        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pranjul-jangra-107700332/" },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className={`p-3 rounded-xl border ${border} bg-gradient-to-br ${cardBg} transition-transform hover:scale-110`}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    ))}
                                </div>

                                <div>
                                    <p className="text-xs opacity-70 mb-3">Let's work together</p>
                                    <Link
                                        to="/contact-me"
                                        className={`inline-flex items-center gap-2 px-4 py-2 border ${border} bg-gradient-to-br ${cardBg} rounded-lg text-sm font-medium transition-transform hover:scale-105`}
                                    >
                                        Get in touch
                                        <ExternalLink size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-16 pt-8 border-t ${footerBorder} flex justify-center`}>
                        <div className={`text-sm ${grayText} text-center`}>
                            &copy; {new Date().getFullYear()} Pranjul Jangra. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}