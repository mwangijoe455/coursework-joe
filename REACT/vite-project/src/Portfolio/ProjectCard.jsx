function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="project-content">
        <span className="category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <button>View Project →</button>
      </div>
    </article>
  );
}

export default ProjectCard;