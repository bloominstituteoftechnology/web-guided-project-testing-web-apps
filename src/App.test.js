import React from 'react';

import { render, screen } from '@testing-library/react'

import App from './App';

test("Renders without errors", () => {
    render(<App/>)
})