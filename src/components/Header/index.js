import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Content t />
        </div>
    );
};

export default Header;
