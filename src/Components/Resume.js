import React from "react";
import "../CSS/Resume.css";

const Resume = () => {
    return (

        <div className="resume-container">
            <div className="resume-title-container">
                <h1 className="resume">RESUME</h1>
            </div>
            <div className="resume-instruction-container">
                <h3 className="resume-instruction">
                    View my resume below or click button below to download!
                </h3>
            </div>
            <div className="download-row">
                <a href="DavidLee_Resume.pdf" download="DavidLee_Resume.pdf">
                    <button className="download-button">DOWNLOAD</button>
                </a>
            </div>
            <iframe
                src="https://drive.google.com/file/d/1s4QOM-63Gq_7oqQXZKcINdBcIx-881l1/preview"
                allow="autoplay"
                className="iframe"
            ></iframe>
        </div>

    );
};

export default Resume;
