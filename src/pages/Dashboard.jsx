import CustomerTable from "../components/CustomerTable";
import { customers } from "../data/Customers";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [totalCustomer, setTotalCustomer] = useState(0);
    const [activeCustomer, setActiveCustomer] = useState(0);
    const [inActiveCustomer, setInactiveCustomer] = useState(0);

    useEffect(() => {
        setTotalCustomer(customers.length);
        setActiveCustomer(customers.filter((c) => c.accountStatus === "active").length);
        setInactiveCustomer(customers.filter((c) => c.accountStatus === "inactive").length);
    });

    return (
        <div className="d-flex flex-column m-5">
            <div className="d-flex justify-content-between align-items-center">
                <DashboardCard title={"Total: " + totalCustomer} subTitle={"A"} />

                <DashboardCard title={"Active: " + activeCustomer} subTitle={"B"} color="info" />

                <DashboardCard title={"Inactive: " + inActiveCustomer} subTitle={"C"} color="danger" />
            </div>
            <div className="d-flex mt-5">
                <CustomerTable customers={customers} />             
            </div>
        </div>
    );
}