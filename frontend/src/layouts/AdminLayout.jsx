import Sidebar from "../components/Sidebar";
import "../styles/AdminLayout.css";

function AdminLayout({ children }) {

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-content">

                {children}

            </div>

        </div>

    );

}

export default AdminLayout;