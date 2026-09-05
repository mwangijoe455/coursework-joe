function ProjectForm({ onSubmit }) {
  return (
    <form className="project-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Project title"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        required
      />

      <input
        type="url"
        name="image"
        placeholder="Image URL"
        required
      />

      <textarea
        name="description"
        placeholder="Project description"
        rows="5"
        required
      ></textarea>

      <button type="submit">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;