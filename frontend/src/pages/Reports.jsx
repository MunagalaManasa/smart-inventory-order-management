import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getInventoryReport } from "../services/reportService";
import "./Reports.css";

function Reports() {

    const [report, setReport] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadReport();

    }, []);

    const loadReport = async () => {

        try {

            const data = await getInventoryReport();

            setReport(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <>
                <Sidebar />

                <div
                    className="container-fluid"
                    style={{
                        marginLeft: "250px",
                        padding: "30px"
                    }}
                >

                    <h2>Loading Report...</h2>

                </div>
            </>

        );

    }

    return (

        <>

            <Sidebar />

            <div
                className="container-fluid reports"
                style={{
                    marginLeft: "250px",
                    padding: "30px"
                }}
            >

                <h1 className="mb-4">
                    📈 Inventory Report
                </h1>

                <div className="report-cards">

                    <div className="report-card">
                        <h3>Total Products</h3>
                        <p>{report?.totalProducts || 0}</p>
                    </div>

                    <div className="report-card">
                        <h3>Total Orders</h3>
                        <p>{report?.totalOrders || 0}</p>
                    </div>

                    <div className="report-card">
                        <h3>Total Stock</h3>
                        <p>{report?.totalStock || 0}</p>
                    </div>

                    <div className="report-card">
                        <h3>Low Stock</h3>
                        <p>{report?.lowStockProducts || 0}</p>
                    </div>

                    <div className="report-card">
                        <h3>Out Of Stock</h3>
                        <p>{report?.outOfStockProducts || 0}</p>
                    </div>

                    <div className="report-card">
                        <h3>Inventory Value</h3>
                        <p>₹ {report?.inventoryValue || 0}</p>
                    </div>

                </div>

                <div className="table-card mt-5">

                    <h3>⚠ Low Stock Products</h3>

                    <table className="table table-hover">

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                report?.lowStockList?.length > 0 ?

                                    report.lowStockList.map((product) => (

                                        <tr key={product.id}>

                                            <td>{product.name}</td>

                                            <td>{product.category}</td>

                                            <td>{product.quantity}</td>

                                            <td>{product.stockStatus}</td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center"
                                        >
                                            No Low Stock Products
                                        </td>

                                    </tr>
                            }

                        </tbody>

                    </table>

                </div>

                <div className="table-card mt-5">

                    <h3>📦 Top Stock Products</h3>

                    <table className="table table-hover">

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Category</th>
                                <th>Quantity</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                report?.topStockProducts?.length > 0 ?

                                    report.topStockProducts.map((product) => (

                                        <tr key={product.id}>

                                            <td>{product.name}</td>

                                            <td>{product.category}</td>

                                            <td>{product.quantity}</td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td
                                            colSpan="3"
                                            className="text-center"
                                        >
                                            No Products Found
                                        </td>

                                    </tr>
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default Reports;