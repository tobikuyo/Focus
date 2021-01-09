import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Discover from "./sections/Discover";
import "./App.css";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Discover />
        </div>
    );
};

export default App;
