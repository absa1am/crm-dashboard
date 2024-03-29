import { Link } from "react-router-dom";

export default function Customers() {
    return (
        <div>
            <p>Customers: <Link to={"/dashboard"} className="underline">View customers</Link></p>
        </div>
    );
}