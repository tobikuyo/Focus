import React from "react";
import { Link } from "react-scroll";
import discover from "../../images/discover.svg";
import "./Discover.css";

const Discover = () => {
    return (
        <div className="discover">
            <img src={discover} alt="discover" className="discover__img" />
            <div className="discover__content">
                <h2 className="discover__heading">Discover Talent</h2>
                <p className="discover__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
                    cumque. Earum, modi voluptas labore voluptate nesciunt ullam, sed
                    ipsam fugiat ad natus libero laudantium. Similique sapiente asperiores
                    quaerat sunt alias.
                </p>
                <Link
                    to="contact"
                    className="discover__link"
                    smooth={true}
                    duration={1000}
                >
                    Get In Touch
                </Link>
            </div>
        </div>
    );
};

export default Discover;
