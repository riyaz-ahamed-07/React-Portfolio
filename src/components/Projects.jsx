import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ProjectCard
            title="Voltify"
            description="AI-powered energy management platform that predicts electricity consumption and rewards users for saving energy."
            technologies="React, Node.js, FastAPI, PostgreSQL"
            github="https://github.com/CodeHuntrix/Voltify"
            demo="https://voltify.vercel.app"
            />

            <ProjectCard
            title="Portfolia"
            description="AI-powered portfolio builder with GitHub integration and LLM assistance."
            technologies="React, FastAPI, PostgreSQL, Tailwind CSS"
            github="https://github.com/username/portfolia"
            demo="https://portfolia.vercel.app"
            />
        </div>
    )
}

export default Projects;
