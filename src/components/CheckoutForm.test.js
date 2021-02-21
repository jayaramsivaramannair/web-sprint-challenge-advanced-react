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
    const firstNameInput = "Jay";
    const lastNameInput = "Nair";
    const addressInput = "10 Alice Way";
    const cityInput = "Wonderland";
    const stateInput = "Nowhere";
    const zipInput = "10000";

    //Act Phase of the Test
    fireEvent.input(screen.getByLabelText('First Name:'), firstNameInput);
    fireEvent.input(screen.getByLabelText('Last Name:'), lastNameInput);
    fireEvent.input(screen.getByLabelText('Address:'), addressInput);
    fireEvent.input(screen.getByLabelText('City:'), cityInput);
    fireEvent.input(screen.getByLabelText('State:'), stateInput);
    fireEvent.input(screen.getByLabelText('Zip:'), zipInput);
    fireEvent.click(screen.getByRole('button'));

});
