import React from "react";
import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./index";

it("should fill input and submit form without errors ", async () => {
    render(<ContactForm />);

    const name = screen.getByPlaceholderText(/name/i);
    const email = screen.getByPlaceholderText(/email/i);
    const message = screen.getByPlaceholderText(/leave us a message/i, { exact: false });

    await waitFor(() => {
        fireEvent.change(name, { target: { value: "Test name" } });
        fireEvent.change(email, { target: { value: "Test email" } });
        fireEvent.change(message, { target: { value: "Test message" } });

        expect(name.value).toBe("Test name");
        expect(email.value).toBe("Test email");
        expect(message.value).toBe("Test message");
    });
});

it("should display error when user types and clears name field", async () => {
    render(<ContactForm />);

    const name = screen.getByPlaceholderText(/name/i);

    userEvent.type(name, "Typing something...");
    userEvent.clear(name);

    await waitFor(() => {
        const nameError = screen.getByText("Name is required");
        expect(nameError).toBeDefined();
    });
});
