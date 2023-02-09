import React from "react";
import { useState, useEffect } from "react";
import "../CSS/Home.css"
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import About from "../Components/About";
import { useSpring, animated } from "react-spring"

function Home() {
    const [about, setAbout] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [fade, setFade] = useSpring(() => ({ opacity: 1 }));


    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => setScrollY(window.scrollY));
        getAboutData();
    }, []);

    useEffect(() => {
        setFade({ opacity: scrollY > 400 ? 0 : 1 });
    }, [scrollY]);

    const loaded = () => (
        <div className="home-container">
            <animated.h1 className="home-name falling" style={fade}>{about.name}</animated.h1>
            <animated.div className="home-brief rising" style={fade}>
                <p>Full Stack Developer</p>
                <p>Marketer & Project Manager</p>
                <p>Brazilian Jiu-jitsu student</p>
                <p>Photographer</p>
            </animated.div>
        </div>
    );

    return (
        <div className="home" id="home">
            <div>{about ? loaded() : <h1></h1>}</div>
            <div className="divider">
                <hr className="rounded" />
            </div>
            <animated.div id="about" className="about">
                <About />
            </animated.div>
            <div className="divider">
                <hr className="rounded" />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div className="divider">
                <hr className="rounded" />
            </div>
            <div id="resume">
                <Resume />
            </div>
            <div className="divider">
                <hr className="rounded" />
            </div>
            <div>
                <h6 className="name">© 2023 DAVID LEE</h6>
            </div>
        </div>
    );
}

export default Home;
