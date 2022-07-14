import React from 'react';

import { render, screen } from '@testing-library/react'

import App from './App';

test("Renders without errors", () => {
    render(<App/>)
})

test("when app mounts, Add New Animal header exists on screen", () => {
    //Arrange:
        render(<App/>)
   
    //Act: 
        //get - finds a single element and if not found, fail test (throw an error)
        const header = screen.getByText(/add new animal/i)
        // console.log(header)

        // query - finds a single element and if not found, return null
        const header2 = screen.queryByText(/add old animal/i)
        console.log(header2)

        // find - finds a single element and if not found, throw error
        const header3 = screen.findByText("Add New Animal");

    //Assert: verify that header exists on screen
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Add New Animal")
})