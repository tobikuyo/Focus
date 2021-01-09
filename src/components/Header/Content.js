import React from "react";
import { Link } from "react-scroll";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <div className="content__container">
                <h1 className="content__heading">Bring Your Resume To Life</h1>
                <h3 className="content__text">
                    Create a portfolio profile that truly represents all the wording on
                    your resume, by showcasing your work.
                </h3>
                <Link to="about" className="content__link" smooth={true} duration={1000}>
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Content;
