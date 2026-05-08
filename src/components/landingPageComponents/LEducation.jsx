import { Calendar, MapPin } from "lucide-react";
import useThemeStyles from "../../hooks/useThemeStyles";
import Tilt from 'react-parallax-tilt';


export default function LEducation() {
    const { cardBg, grayText, cyanText, border, shadow } = useThemeStyles();

    return (
        <section
            id="education"
            className="relative w-full mx-auto px-6 pt-24"
        >
            {/* Section Header */}
            <h2 className={`text-3xl font-playfair tracking-tight mb-14 ${cyanText}`}>
                Education
            </h2>

            {/* Education List */}
            <div className="max-w-5xl mx-auto space-y-6">
                {/* MCA */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={1.7}
                    tiltMaxAngleY={0.8}
                    transitionSpeed={1000}
                >
                    <div
                        className={`rounded-xl border ${border} bg-gradient-to-br ${cardBg} p-6 md:p-8 shadow-md ${shadow} transition-colors duration-300`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-medium">
                                    Master of Computer Applications (MCA)
                                </h3>
                                <p className={`mt-1 text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <Calendar size="15" /> 2025 – 2027 · Present
                                </p>
                            </div>

                            <div className="md:text-right">
                                <p className="text-base font-medium">
                                    Chaudhary Devi Lal University
                                </p>
                                <p className={`text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <MapPin size="15" /> Sirsa, Haryana
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>

                {/* BSc */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={1.7}
                    tiltMaxAngleY={0.8}
                    transitionSpeed={1000}
                >
                    <div
                        className={`rounded-xl border ${border} bg-gradient-to-br ${cardBg} p-6 md:p-8 shadow-md ${shadow} transition-colors duration-300`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-medium">
                                    Bachelor of Science (Computer Science)
                                </h3>
                                <p className={`mt-1 text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <Calendar size="15" /> 2021 – 2024
                                </p>
                            </div>

                            <div className="md:text-right">
                                <p className="text-base font-medium">
                                    Manohar Memorial PG College
                                </p>
                                <p className={`text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <MapPin size="15" /> Fatehabad, Haryana
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>

                {/* 12th */}
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.04}
                    scale={1}
                    tiltMaxAngleX={1.7}
                    tiltMaxAngleY={0.8}
                    transitionSpeed={1000}
                >
                    <div
                        className={`rounded-xl border ${border} bg-gradient-to-br ${cardBg} p-6 md:p-8 shadow-md ${shadow} transition-colors duration-300`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-medium">
                                    12th Grade (PCM)
                                </h3>
                                <p className={`mt-1 text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <Calendar size="15" /> 2020 – 2021
                                </p>
                            </div>

                            <div className="md:text-right">
                                <p className="text-base font-medium">
                                    St. John’s International School
                                </p>
                                <p className={`text-sm ${grayText} flex flex-nowrap gap-1 items-center`}>
                                    <MapPin size="15" /> Fatehabad, Haryana
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    );
}
