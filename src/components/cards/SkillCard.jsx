const SkillCard = ({ category, skills }) => {
  return (
    <div className="skill-card">
      <h3 className="card-heading">{category}</h3>
      <div className="chips">
        {skills.map((skill) => (
          <span className="chip" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;