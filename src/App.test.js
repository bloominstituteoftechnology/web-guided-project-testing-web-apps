import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";

test("On load, renders App without error", ()=> {
    render(<App/>);
});

test("On load, renders the app header", ()=> {
    //Arrange: Render out App component
    render(<App/>);

    //Act: get our header element
    const header = screen.queryByText("Add New Animal");

    //Assert: Does our element exist

});