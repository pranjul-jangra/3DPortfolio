import { short_skills } from "../../utils/skills";
import Tilt from 'react-parallax-tilt';
import useThemeStyles from "../../hooks/useThemeStyles";

function SkillCard({ skill, cardBg }) {
    return (
        <div className="relative h-full w-full">
            <div className={`flex flex-col gap-3 w-full h-full p-4 bg-gradient-to-br ${cardBg}`} >
                <div className="flex items-center gap-3">
                    <img
                        src={skill.icon}
                        alt={skill.label}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                    />
                    <span className="text-sm font-semibold">{skill.label}</span>
                </div>

                <p className="text-xs leading-relaxed opacity-80">
                    {skill.proof}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.usedIn.map(p => (
                        <span
                            key={p}
                            className="text-[11px] px-2 py-1 rounded-md border opacity-70"
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function LSkills() {
    const { cyanText, githubCardBorder, cardBg, border, shadow } = useThemeStyles();

    return (
        <section className="px-6 pt-20">
            <h2 className={`text-3xl font-playfair mb-8 ${cyanText}`}>Core Stack</h2>

            <div>
                {short_skills?.map(group => (
                    <div key={group.category} className="mb-10 last:mb-0">
                        <h3 className="text-lg font-semibold mb-4 opacity-90">
                            {group.category}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group?.items?.map(skill => (
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.04}
                                    scale={1}
                                    tiltMaxAngleX={4}
                                    tiltMaxAngleY={4}
                                    transitionSpeed={1000}
                                    className={`rounded-2xl overflow-hidden w-full h-full border ${border} shadow-lg ${shadow} hover:-translate-y-1 transition-all duration-[1.4s] ease-out`}
                                >
                                    <SkillCard
                                        key={skill.label}
                                        skill={skill}
                                        githubCardBorder={githubCardBorder}
                                        cardBg={cardBg}
                                    />
                                </Tilt>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
