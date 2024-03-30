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
                {customers.map((customer) =>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.accountStatus}</td>
                        <td>Edit | Delete</td>
                    </tr>                        
                )}
            </tbody>
        </table>
    );
}