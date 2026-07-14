import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {

    return (

        <>

            <Sidebar />

            <div
                style={{
                    marginLeft: "240px",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    background: "#f4f7fb"
                }}
            >

                <Navbar />

                <main
                    style={{
                        flex: 1,
                        padding: "20px"
                    }}
                >

                    {children}

                </main>

                <Footer />

            </div>

        </>

    );

}

export default Layout;