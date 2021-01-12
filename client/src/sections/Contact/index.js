import React, { useState } from "react";
import axiosInstance from "../../api";
import contact from "../../images/contact.svg";
import "./Contact.css";

const initialDetails = {
    name: "",
    email: "",
    message: ""
};

const Contact = () => {
    const [details, setDetails] = useState(initialDetails);

    const handleChanges = event => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await axiosInstance.post("/", details);
            setDetails(initialDetails);
        } catch (error) {
            console.log("GET Users", error);
        }
    };

    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__content">
                    <h2 className="contact__heading">Get In Touch</h2>
                    <p className="contact__subheading">
                        Enter your details below, if you would like to be notified when
                        the service is available.
                    </p>

                    <form onSubmit={handleSubmit} className="contact__form">
                        <input
                            name="name"
                            type="text"
                            className="contact__form-input"
                            placeholder="Name"
                            value={details.name}
                            onChange={handleChanges}
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            className="contact__form-input"
                            placeholder="Email"
                            value={details.email}
                            onChange={handleChanges}
                            required
                        />
                        <textarea
                            name="message"
                            className="contact__form-textarea"
                            placeholder="Leave us a message or some feedback if you'd like to"
                            value={details.message}
                            onChange={handleChanges}
                        />
                        <button type="submit" className="contact__form-btn">
                            Submit
                        </button>
                    </form>
                </div>
                <img src={contact} alt="contact us" className="contact__image" />
            </div>
            <p className="contact__copy">&copy; 2021 Focus Group</p>
        </div>
    );
};

export default Contact;
