import React from "react";
import website from "../../images/website.svg";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <h2 className="about__heading">Create a Personal Website</h2>
                <p className="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                    similique dolorum quo reprehenderit, corporis officia, quam dicta
                    dolores perferendis blanditiis vel velit nihil tempore nesciunt
                    cupiditate deleniti, esse numquam.
                </p>
            </div>
            <img src={website} alt="personal website" className="about__img" />
        </div>
    );
};

export default About;
