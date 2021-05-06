import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";

test("On load, renders App without error", ()=> {
    render(<App/>);
});

test("On load, renders the app header", ()=> {
    //Arrange: Render out App component.
    render(<App/>);

    //Act: Get our header element.
    const header = screen.queryByText(/add new animal/i);

    //Assert: Does our element exist?
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/add new animal/i);
    expect(header).not.toBeFalsy();
});