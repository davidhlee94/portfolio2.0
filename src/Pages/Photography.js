import React from "react";
import "../CSS/Photography.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Photography = () => {
    return (
        <div className="photography-container">
            <div className="photography-title-container">
                <h1 className="photography">PHOTOGRAPHY</h1>
            </div>
            <div className="divider">
                <hr className="rounded" />
            </div>
            <div className="carousel-container">
                <Carousel >
                    <Carousel.Item className="carousel-item">
                        <Link to="/photography/portrait">
                            <img src="../photography/portraits/4.JPG"
                                className="d-block w-100 carousel-image"
                                alt="First slide" />
                            <Carousel.Caption className="caption-center">
                                <h3 className="image-text">Portrait</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <Link to="/photography/personal">
                            <img src="../photography/personal/8.JPG"
                                className="d-block w-100 carousel-image"
                                alt="Second slide" />
                            <Carousel.Caption className="caption-center">
                                <h3 className="image-text">Personal</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <Link to="/photography/sport">
                            <img src="../photography/sport/1.JPG"
                                className="d-block w-100 carousel-image"
                                alt="Third slide" />
                            <Carousel.Caption className="caption-center">
                                <h3 className="image-text">Sport</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="photo-text">
                <p>Thank you for visiting my photography section.</p>
                <p>I am passionate about capturing moments through the lens of my camera. Here I've split my work into three distinct categories: Portrait, Personal, and Sport. Portrait features client work, Personal encompasses my street and landscape photography, and Sport showcases my coverage of Brazilian Jiu-jitsu competitions and open mats. As a developer, adding a photography section to my portfolio was a thrilling experience as it allows me to showcase my creative outlet. I hope you find my images engaging and enjoyable.</p>
            </div>
        </div>
    );
};

export default Photography;
