import Layout from "./components/Layout";
import CreateCustomer from "./pages/CreateCustomer";
import Customers from "./pages/ViewCustomers";

const { createBrowserRouter } = require("react-router-dom");
const { default: Dashboard } = require("./pages/Dashboard");

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Layout children={<Dashboard />} />
    },
    {
        path: "/customers",
        element: <Layout children={<Customers />} />
    },
    {
        path: "/create-customer",
        element: <Layout children={<CreateCustomer  />} />
    }
])