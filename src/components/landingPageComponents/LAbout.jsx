import useThemeStyles from "../../hooks/useThemeStyles";

export default function LAbout() {
    const { grayText, cyanText } = useThemeStyles();

    return (
        <section
            id="about"
            className="relative w-full mx-auto px-6 pt-24"
        >
            {/* Section Header */}
            <h2 className={`text-3xl font-playfair tracking-tight mb-10 ${cyanText}`}>
                About Me
            </h2>

            {/* Core Content */}
            <div className={`max-w-3xl space-y-6 text-base leading-relaxed ${grayText}`}>
                <p>
                    I’m a{" "}
                    <span className={`font-medium ${cyanText}`}>
                        full-stack MERN developer
                    </span>{" "}
                    focused on building real, production-style web applications rather
                    than demo projects or surface-level CRUD systems.
                </p>

                <p>
                    I work across the entire stack—from designing APIs and data models
                    to building state-heavy, responsive interfaces that handle real user
                    flows, edge cases, and performance constraints.
                </p>

                <p>
                    My approach leans toward{" "}
                    <span className={`font-medium ${cyanText}`}>
                        product-driven development
                    </span>
                    : features that scale logically, remain maintainable, and hold up
                    as complexity increases.
                </p>
            </div>

            {/* By the Numbers */}
            <div
                className={`mt-10 flex flex-wrap gap-x-12 gap-y-4 text-sm`}
            >
                <div>
                    <span className={`font-semibold ${cyanText}`}>10+</span>{" "}
                    <span className={grayText}>Projects</span>
                </div>

                <div>
                    <span className={`font-semibold ${cyanText}`}>5+</span>{" "}
                    <span className={grayText}>Full-Stack Builds</span>
                </div>

                <div>
                    <span className={`font-semibold ${cyanText}`}>20+</span>{" "}
                    <span className={grayText}>Technical Skills</span>
                </div>
            </div>
        </section>
    );
}
