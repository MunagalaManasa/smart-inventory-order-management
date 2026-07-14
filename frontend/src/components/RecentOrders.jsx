function RecentOrders({ orders }) {

    return (

        <div className="card shadow mt-4">

            <div className="card-header bg-success text-white">

                <h5 className="mb-0">
                    Recent Orders
                </h5>

            </div>

            <div className="card-body">

                <table className="table table-striped">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>

                        </tr>

                    </thead>

                    <tbody>

                        {orders.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center"
                                >
                                    No Orders Found
                                </td>

                            </tr>

                        ) : (

                            orders.map((order) => (

                                <tr key={order.id}>

                                    <td>{order.id}</td>

                                    <td>{order.customerName}</td>

                                    <td>{order.productName}</td>

                                    <td>{order.quantity}</td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default RecentOrders;