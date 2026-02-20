import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import useThemeStyles from "../../hooks/useThemeStyles";
import Tilt from 'react-parallax-tilt';
import { featuredProjects } from "../../utils/projects";


const StickyCard002 = ({ cards, containerClassName = "" }) => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  const { githubCardBorder } = useThemeStyles();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const elements = cardRefs.current;
      const total = elements.length;
      if (!elements[0]) return;

      gsap.set(elements[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < total; i++) {
        gsap.set(elements[i], { y: "120%", scale: 1, rotation: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current.querySelector(".sticky-cards"),
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.6,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        tl.to(
          elements[i],
          { scale: 0.82, rotation: 3, y: "-10%", duration: 1, ease: "none" },
          i
        );
        tl.to(
          elements[i + 1],
          { y: "0%", duration: 1, ease: "none" },
          i
        );
      }

      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      if (container.current) ro.observe(container.current);

      return () => {
        ro.disconnect();
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative w-full max-w-7xl mx-auto min-h-screen"
    >
      <div className="sticky-cards relative flex h-screen w-full items-center justify-center px-4 md:px-8">
        {cards?.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`absolute w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ${containerClassName}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.04}
              scale={1}
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              transitionSpeed={1000}
              className={`rounded-2xl shadow-md border ${githubCardBorder}`}
            >
              <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[480px] bg-neutral-950/98 rounded-2xl overflow-hidden">
                {/* Image Panel */}
                <div className="relative h-[220px] md:h-auto md:w-3/5 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover object-left-top"
                    draggable={false}
                  />
                </div>

                {/* Content Panel */}
                <div className="flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-10 md:w-2/5 border-t md:border-t-0 md:border-l border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {card?.tech?.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={card.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href={card.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};


export const LProjects = () => {
  const { cyanText } = useThemeStyles();
  const defaultCards = featuredProjects;

  return (
    <div className="px-6 py-24">
      <h2 className={`text-3xl font-bold mb-10 font-playfair ${cyanText}`}>
        Featured Projects
      </h2>

      <StickyCard002 cards={defaultCards} />
    </div>
  );
};

export default StickyCard002;
