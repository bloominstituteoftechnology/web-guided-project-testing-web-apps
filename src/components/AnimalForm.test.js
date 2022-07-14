import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("AnimalForm renders without errors", () => {
    render(<AnimalForm />);
})

test("when user fills all fields and submits, species input text appears in list", async () => {
    // Arrange: render our component
    render(<AnimalForm/>);
    const dummyInputs = ["feline", "102", "super cute"];

    //Act: fill out and submit the form
    // get all the relevant input elements
    const specieInput = screen.getByLabelText(/species:/i)
    userEvent.type(specieInput, dummyInputs[0])

    const ageInput = screen.getByLabelText(/age:/i)
    userEvent.type(ageInput, dummyInputs[1])

    const notesInput = screen.getByLabelText(/notes:/i)
    userEvent.type(notesInput, dummyInputs[2])
    // // get the submit button

    setTimeout(() => {
        const submitButton = screen.getByRole("button");
    //ARIA roles - DOM elements that have role attributes automatically assigned to them.
        userEvent.click(submitButton);
    }, 300)
    

    //Assert: verify the behavior is as expected
    const speciesInList = await screen.getByText(dummyInputs[0])
    expect(speciesInList).toBeInTheDocument();
})
