import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar__logo">focus</h1>

            <div className="navbar__links">
                <Link to="/#about">About</Link>
                <Link to="/#services">Services</Link>
            </div>

            <Link to="/#contact" className="navbar__contact">
                Get In Touch
            </Link>
        </nav>
    );
};

export default Navbar;
