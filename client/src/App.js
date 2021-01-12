import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Exit from "./pages/Exit";
import "./App.css";

const App = () => {
    return (
        <div>
            <Route path="/thankyou" component={Exit} />
            <Route exact path="/" component={Home} />
        </div>
    );
};

export default App;
