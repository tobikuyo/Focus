import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosInstance from "../../api";
import contact from "../../images/contact.svg";
import "./Contact.css";

const initialDetails = {
    name: "",
    email: "",
    message: ""
};

const initialErrors = {
    name: "",
    email: ""
};

const Contact = () => {
    const [details, setDetails] = useState(initialDetails);
    const [errors, setErrors] = useState(initialErrors);

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email().required("Email is required"),
        message: yup.string()
    });

    const validateChange = async event => {
        try {
            await yup.reach(schema, event.target.name).validate(event.target.value);
            setErrors({ ...errors, [event.target.name]: "" });
        } catch (error) {
            setErrors({ ...errors, [event.target.name]: error.errors[0] });
        }
    };

    const handleChanges = event => {
        event.persist();
        validateChange(event);
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await axiosInstance.post("/", details);
            setDetails(initialDetails);
            history.push("/thankyou");
        } catch (error) {
            console.log("POST Users", error.detail);
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
                        {errors.name.length > 0 && (
                            <p className="contact__form-error">{`${errors.name}`}</p>
                        )}
                        <input
                            name="email"
                            type="email"
                            className="contact__form-input"
                            placeholder="Email"
                            value={details.email}
                            onChange={handleChanges}
                            required
                        />
                        {errors.email.length > 0 && (
                            <p className="contact__form-error">{`${errors.email}`}</p>
                        )}
                        <textarea
                            name="message"
                            className="contact__form-textarea"
                            placeholder="Feel free to leave us a message or some feedback..."
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
            <p className="copy">&copy; 2021 Focus Group</p>
        </div>
    );
};

export default Contact;
