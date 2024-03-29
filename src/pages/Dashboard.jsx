import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <p>Dashboard: <Link to={"/customers"} className="underline">View customers</Link></p>
        </div>
    );
}