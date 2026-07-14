function LowStockProducts({ products }) {

    return (

        <div className="card shadow mt-4">

            <div className="card-header bg-danger text-white">

                <h5 className="mb-0">
                    Low Stock Products
                </h5>

            </div>

            <div className="card-body">

                <table className="table table-striped">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Product</th>
                            <th>Quantity</th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="3"
                                    className="text-center"
                                >
                                    No Low Stock Products
                                </td>

                            </tr>

                        ) : (

                            products.map((product) => (

                                <tr key={product.id}>

                                    <td>{product.id}</td>

                                    <td>{product.name}</td>

                                    <td>{product.quantity}</td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default LowStockProducts;