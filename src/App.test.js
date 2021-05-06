import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";

test("On load, renders App without error", ()=> {
    render(<App/>);
});
