import { MdDelete, MdEdit } from "react-icons/md";

export default function CustomerTable({ customers }) {
    return (
        <table className="table border mt-5">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, id) =>
                    <tr key={customer.id}>
                        <td>{id + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.accountStatus}</td>
                        <td>
                            <a className="btn btn-outline-primary" style={{ marginRight: '3px' }}>
                                <MdEdit />
                            </a>
                            <a className="btn btn-outline-danger">
                                <MdDelete />
                            </a>
                        </td>
                    </tr>                        
                )}
            </tbody>
        </table>
    );
}