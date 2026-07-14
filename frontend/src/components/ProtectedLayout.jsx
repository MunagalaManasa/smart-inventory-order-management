import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";


function ProtectedLayout({children}) {


    return (

        <ProtectedRoute>

            <Layout>

                {children}

            </Layout>

        </ProtectedRoute>

    );

}


export default ProtectedLayout;