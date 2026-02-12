import { Mail, Github, Linkedin } from "lucide-react";
import Email from '../Email';
import useThemeStyles from "../../hooks/useThemeStyles";

export default function LContact() {
    const { border, textPrimary,  cyanText, grayText, cardBg } = useThemeStyles();

    return (
        <section id="contact" className={`w-full pb-24 px-6 z-10`}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-14">
                    <p className={`text-sm tracking-widest font-playfair uppercase ${cyanText}`}>Contact</p>
                    <h2 className={`text-3xl md:text-4xl font-semibold mt-3 ${textPrimary}`}>
                        Let’s build something useful
                    </h2>
                    <p className={`mt-4 max-w-xl ${grayText}`}>
                        If you have a project, a problem worth solving, or just want to
                        talk engineering — send a message. I read everything.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-[1fr_280px] gap-12">
                    {/* Form */}
                    <Email />

                    {/* Side info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Mail size={18} />
                            <span className="text-sm">pranjuljan68@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-6 *:p-3 *:border *:rounded-xl *:bg-gradient-to-br">
                            <a
                                href="https://github.com/pranjul-jangra"
                                target="_blank"
                                rel="noreferrer"
                                className={`hover:scale-110 group hover:rotate-12 transition-transform duration-300 ${cardBg} ${border}`}
                            >
                                <Github size={20} className="group-hover:scale-105 transition-transform duration-200" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/pranjul-jangra-107700332/"
                                target="_blank"
                                rel="noreferrer"
                                className={`hover:scale-110 group hover:rotate-12 transition-transform duration-300 ${cardBg} ${border}`}
                            >
                                <Linkedin size={20} className="group-hover:scale-105 transition-transform duration-200" />
                            </a>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed">
                            Open to freelance work, full-time roles, and serious collaborations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
