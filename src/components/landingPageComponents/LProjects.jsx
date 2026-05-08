import useThemeStyles from "../../hooks/useThemeStyles";
import { featuredProjects } from "../../utils/projects";
import "../../layout/layouts.scss";
import ProjectCard from "../ProjectCard";


export const LProjects = () => {
  const { cyanText } = useThemeStyles();

  return (
    <div className="px-6 py-24">
      <h2 className={`text-3xl font-bold mb-10 font-playfair ${cyanText}`}>
        Featured Projects
      </h2>

      <div className='projects-grid gap-6 w-full'>
        {
          featuredProjects?.map((p, i) => (
            <ProjectCard variants="" key={`frontend-project-${i}`} project={p} />
          ))
        }
      </div>
    </div>
  );
};