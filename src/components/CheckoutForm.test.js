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
    const firstNameInput = "John";
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



    fireEvent.submit(screen.getByRole('button'));
    //Below will be an error as the paragraph elements are part of an asynchronous code
    //expect(screen.getByRole('paragraph')).toBeInTheDocument();

    //Once the submit button has been clicked, it waits till all the below expected elements to appear on the screen
    await waitFor(() => screen.getByText('You have ordered some plants! Woo-hoo!'));
    await waitFor(() => screen.getByText('Your new green friends will be shipped to:'));
    await waitFor(() => screen.getByDisplayValue(firstNameInput));
    await waitFor(() => screen.getByDisplayValue(lastNameInput));
    await waitFor(() => screen.getByDisplayValue(addressInput));
    await waitFor(() => screen.getByDisplayValue(cityInput));
    await waitFor(() => screen.getByDisplayValue(stateInput));
    await waitFor(() => screen.getByDisplayValue(zipInput));

});
