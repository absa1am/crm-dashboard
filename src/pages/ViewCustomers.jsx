import CustomerTable from "../components/CustomerTable";
import { customers } from "../data/Customers";

export default function ViewCustomers() {
    return (
        <div className="d-flex m-5">
            <CustomerTable customers={customers} />
        </div>
    );
}