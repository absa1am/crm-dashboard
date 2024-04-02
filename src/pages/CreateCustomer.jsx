import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { customers } from "../data/Customers";

export default function CreateCustomer () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();

        let newCustomer = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            phone: phone,
            status: status
        };

        customers.push(newCustomer);

        navigate("/customers");
    }

    return (
        <div className="d-flex justify-content-center m-5">
            <form className="w-50" onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Customer Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Customer Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Customer Phone</label>
                    <input type="number" className="form-control" id="phone" placeholder="+880 1XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Customer Status</label>
                    <select className="form-select" aria-label="Default select example" defaultValue={"active"} onChange={(e) => setStatus(e.target.value)} >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Create</button>
                </div>
            </form>
        </div>
    );
}