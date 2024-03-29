import Layout from "./components/Layout";
import Customers from "./pages/Customers";

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
    }
])