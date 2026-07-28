import SkillCard from './cards/SkillCard';

const Skills = () => {
    return (
        <>
            <h1>Skills</h1>
            <SkillCard
                category="Languages"
                skills={["Java", "Python", "JavaScript", "TypeScript", "SQL"]}
            />
            <SkillCard
                category="Frameworks"
                skills={["React", "React Native", "Node.js", "Express.js", "Spring Boot"]}
            />
            <SkillCard
                category="Databases & Cloud"
                skills={["PostgreSQL", "MySQL", "Google Cloud Platform", "Supabase", "Vercel"]}
            />
        </>
    )
}

export default Skills;