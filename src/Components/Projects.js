import { useState, useEffect } from "react";
import "../CSS/Project.css";

function Projects() {
    const [projects, setProjects] = useState([]);

    const getProjectsData = async () => {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        getProjectsData();
    }, []);

    return (
        <div className="projects-all">
            <div className="projects-title-container">
                <h1 className="projects">PROJECTS</h1>
            </div>
            <div className="project-all-container">
                {projects.map((project) => {
                    return (
                        <div className="project-container">
                            <div className="project-image-button">
                                <img className="project-image" src={project.image} />
                                <div className="button-container">
                                    <a href={project.git}>
                                        <button className="button">Github</button>
                                    </a>
                                    <a href={project.live}>
                                        <button className="button">Live Site</button>
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h1 className="project-name">{project.name}</h1>
                                <p className="project-about">{project.about}</p>
                                <div className="technology">
                                    <img className="technology-badge" src={project.technology1} />
                                    <img className="technology-badge" src={project.technology2} />
                                    <img className="technology-badge" src={project.technology3} />
                                    <img className="technology-badge" src={project.technology4} />
                                    <img className="technology-badge" src={project.technology5} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
