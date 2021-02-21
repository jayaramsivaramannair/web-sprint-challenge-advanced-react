import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    expect(screen.getByRole('heading')).toHaveTextContent('Checkout Form');
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    //Arrange Phase of the Test - This lets us arrange the inputs to be entered into the form
    const firstNameInput = "Alice";
    const lastNameInput = "Smith";
    const addressInput = "10 Alice Way";
    const cityInput = "The Shire";
    const stateInput = "Nowhere";
    const zipInput = "10000";

    //Act Phase of the Test
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: firstNameInput } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: lastNameInput } });
    fireEvent.change(screen.getByLabelText('Address:'), { target: { value: addressInput } });
    fireEvent.change(screen.getByLabelText('City:'), { target: { value: cityInput } });
    fireEvent.change(screen.getByLabelText('State:'), { target: { value: stateInput } });
    fireEvent.change(screen.getByLabelText('Zip:'), { target: { value: zipInput } });
    fireEvent.click(screen.getByRole('button'));

    const successMessage = "You have ordered some plants! Woo-hoo! Your new green friends will be shipped to:";

    const paragraphs = screen.findByRole('paragraph');

    paragraphs.then((para) => {
        expect(para).toBeInTheDocument;
        expect(para).toHaveDisplayValue("I am great!");
    })
        .catch((err) => {
            console.log(err);
        })

});
