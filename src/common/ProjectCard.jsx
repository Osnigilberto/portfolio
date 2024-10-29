const ProjectCard = ({ src, link, h2, p }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h2} logo`} />
      <h2>{h2}</h2>
      <p>{p}</p>
    </a>
  );
};

export default ProjectCard;
