import React from "react";
import chat from "../../images/chat.svg";
import "./Exit.css";

const Exit = () => {
    return (
        <div className="exit">
            <div className="exit__container">
                <img src={chat} alt="chat" className="exit__image" />
                <h3 className="exit__text">
                    You will be notified as soon as we are up and running
                </h3>
            </div>
            <p className="copy">&copy; 2021 Focus Group</p>
        </div>
    );
};

export default Exit;
