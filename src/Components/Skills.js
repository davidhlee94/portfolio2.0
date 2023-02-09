import "../CSS/Skills.css"
import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState(null);

    const getSkillsData = async () => {
        const response = await fetch("./skills.json");
        const data = await response.json();
        setSkills(data);
    };


    const loaded = () => {
        return skills.map((skills) => (
            <div className="skills-icons-name">
                <img className="skill-icon" src={skills.icon} />
                <p className="skill-name">{skills.name}</p>
            </div>
        ))
    }

    const loading = () => {
        return (
            <p>loading...</p>
        )
    }

    useEffect(() => {
        getSkillsData();
    }, []);

    return (
        <div className="skills-container">
            <div>
                <h2 className="skill-title">SKILLS</h2>
            </div>
            <div className="skill-name-container">
                {skills ? loaded() : loading()}
            </div>
        </div>
    )

}

export default Skills;