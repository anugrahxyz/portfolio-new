interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  currentFocus?: string;
  links: { github?: string; demo?: string; notes?: string };
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section className="card p-4 m-2 rounded" style={{backgroundColor: "var(--card-bg)", border: `1px solid var(--card-border)`, boxShadow: `var(--card-shadow)`}}>
      <h3 className="font-semibold text-lg" style={{color: "var(--foreground)"}}>
        {project.title}
      </h3>
      <p className="mb-2" style={{color: "var(--foreground)"}}>{project.description}</p>
      <div className="flex items-center gap-2">        
        <span style={{
          backgroundColor: "var(--accent)",
          color: "white",
          fontWeight: "600",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          borderRadius: "9999px",
          padding: "0.125rem 0.5rem",
          textTransform: "uppercase",
          userSelect: "none"
        }}>
          {project.status}
        </span>
        {project.currentFocus && <small style={{color: "var(--foreground)", fontStyle: "italic"}}>{project.currentFocus}</small>}
      </div>
      <div className="mt-2 flex gap-4">
        {project.links.github && (
          <a href={project.links.github} style={{color: "var(--accent)"}} className="hover:underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} style={{color: "var(--accent)"}} className="hover:underline" target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {project.links.notes && (
          <a href={project.links.notes} style={{color: "var(--accent)"}} className="hover:underline" target="_blank" rel="noreferrer">
            Notes
          </a>
        )}
      </div>
    </section>
  );
}
