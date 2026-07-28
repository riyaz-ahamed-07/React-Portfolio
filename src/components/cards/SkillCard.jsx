
const SkillCard = ({ category, skills }) => {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "20px",
                margin: "10px",
                borderRadius: "8px",
            }}  
        >
            <h3>{category}</h3>

            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>

        </div>
    )
}

export default SkillCard;