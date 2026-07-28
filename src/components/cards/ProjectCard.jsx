const ProjectCard = ({ title, description, technologies, github, demo }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Technologies:</strong> {technologies}
      </p>

      <p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <p>
        <a href={demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </p>
    </div>
  );
};

export default ProjectCard;