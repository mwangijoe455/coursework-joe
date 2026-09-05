import { useState } from "react";
import projectsData from "./data.json";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");

  function handleAddProject(event) {
    event.preventDefault();

    const form = event.target;

    const newProject = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
    };

    setProjects((currentProjects) => [
      ...currentProjects,
      newProject,
    ]);

    form.reset();
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1>My Portfolio</h1>

          <a href="#projects">Projects</a>
          <a href="#add-project">Add Project</a>
        </nav>

        <div className="hero-content">
          <p className="subtitle">CREATIVE PORTFOLIO</p>

          <h2>
            Building Digital
            <span> Experiences</span>
          </h2>

          <p>
            A collection of projects, ideas, and creative
            work showcasing my development journey.
          </p>

          <a href="#projects" className="hero-button">
            View Projects
          </a>
        </div>
      </header>

      <main>
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <div>
              <p className="subtitle">MY WORK</p>
              <h2>Featured Projects</h2>
            </div>

            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="no-results">
              No projects found.
            </p>
          )}
        </section>

        <section id="add-project" className="add-section">
          <p className="subtitle">ADD WORK</p>

          <h2>Add a New Project</h2>

          <ProjectForm onSubmit={handleAddProject} />
        </section>
      </main>

      <footer>
        <p>© 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
