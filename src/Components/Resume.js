import React from "react";
import "../CSS/Resume.css";

const Resume = () => {
    return (

        <div className="resume-container">
            <div className="resume-title-container">
                <h1 className="resume">RESUME</h1>
            </div>
            <iframe
                src="https://drive.google.com/file/d/1wPg5IijrxM_sPQEn2RdjacnUk-nGTFpf/preview"
                allow="autoplay"
                className="iframe"
            ></iframe>
        </div>

    );
};

export default Resume;
