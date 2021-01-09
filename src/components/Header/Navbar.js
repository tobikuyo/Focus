import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo">focus</h2>

            <div className="navbar__links">
                <Link to="about" smooth={true} duration={1000}>
                    About
                </Link>
                <Link to="discover" smooth={true} duration={1000}>
                    Discover
                </Link>
                <Link to="services" smooth={true} duration={1000}>
                    Services
                </Link>
            </div>

            <Link to="contact" className="navbar__contact" smooth={true} duration={1000}>
                Get In Touch
            </Link>
        </nav>
    );
};

export default Navbar;
