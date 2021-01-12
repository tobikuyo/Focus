import React from "react";
import portfolio from "../../images/portfolio.svg";
import cards from "../../images/cards.svg";
import feedback from "../../images/feedback.svg";
import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <h2 className="services__heading">Our Services</h2>
            <div className="services__container">
                <div className="services__card">
                    <img src={portfolio} alt="portfolio" className="services__image" />
                    <h4 className="services__card--heading">Portfolio Creation</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                        voluptatibus.
                    </p>
                </div>
                <div className="services__card">
                    <img src={cards} alt="portfolio" className="services__image" />
                    <h4 className="services__card--heading">Talent Pool</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                        voluptatibus.
                    </p>
                </div>
                <div className="services__card">
                    <img src={feedback} alt="portfolio" className="services__image" />
                    <h4 className="services__card--heading">Portfolio Feedback</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                        voluptatibus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
