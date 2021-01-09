import React from "react";
import Navbar from "../../components/Header/Navbar";
import Content from "../../components/Header/Content";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Content />
        </div>
    );
};

export default Header;
