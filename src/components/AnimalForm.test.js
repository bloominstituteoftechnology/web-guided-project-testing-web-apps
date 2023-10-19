import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

/*

NOTE:

    The Guided Project video shows the older way of using the `userEvent` library.

    The newer version 14 (included in this starter code) works like this:

    test("renders AnimalForm without errors", () => {
        const user = userEvent.setup(); // instantiate a user
        render(<AnimalForm />); // render the component
        await user.type(specieInput, "foo"); // await user DOT event
    });

    Check the solution repo for the full GP code.

*/
