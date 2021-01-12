import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Discover from "./sections/Discover";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import "./App.css";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Discover />
            <Services />
            <Contact />
        </div>
    );
};

export default App;
