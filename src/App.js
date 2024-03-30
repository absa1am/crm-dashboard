import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useState } from 'react';
import { customers } from './data/Customers';

function App() {
    const [allCustomer, setAllCustomer] = useState(customers);

    function addCustomer(customer) {
        setAllCustomer([...allCustomer, customer]);
    }

    return (
        <RouterProvider router={router} />
    );
}

export default App;
