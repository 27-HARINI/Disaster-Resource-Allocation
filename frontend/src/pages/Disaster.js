import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import DisasterModal from "../components/DisasterModal";
import "../styles/table.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
    FaEdit,
    FaTrash,
    FaMapMarkerAlt,
    FaExclamationTriangle
} from "react-icons/fa";

import {
    getDisasters,
    addDisaster,
    updateDisaster,
    deleteDisaster
} from "../services/disasterService";

function Disaster() {

    const [search, setSearch] = useState("");
    const [disasters, setDisasters] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDisaster, setSelectedDisaster] = useState(null);

    useEffect(() => {
        loadDisasters();
    }, []);

    const loadDisasters = () => {

        getDisasters()
            .then((res) => {
                setDisasters(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to load disasters");
            });

    };

    const handleAdd = () => {

        setSelectedDisaster(null);
        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedDisaster(item);
        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedDisaster) {

            updateDisaster(selectedDisaster.id, data)

                .then(() => {

                    toast.success("Disaster Updated Successfully");

                    loadDisasters();

                    setShowModal(false);

                })

                .catch((err) => {

                    console.log(err);

                    toast.error("Update Failed");

                });

        } else {

            addDisaster(data)

                .then(() => {

                    toast.success("Disaster Added Successfully");

                    loadDisasters();

                    setShowModal(false);

                })

                .catch((err) => {

                    console.log(err);

                    toast.error("Failed to Add Disaster");

                });

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete Disaster?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#0A2540",

            cancelButtonColor: "#d33",

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                deleteDisaster(id)

                    .then(() => {

                        toast.success("Disaster Deleted Successfully");

                        loadDisasters();

                    })

                    .catch((err) => {

                        console.log(err);

                        toast.error("Unable to Delete");

                    });

            }

        });

    };

    const filtered = disasters.filter((d) =>

        d.disasterType?.toLowerCase().includes(search.toLowerCase()) ||

        d.location?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader
                title="Disaster Management"
                subtitle="Monitor and manage all disaster events."
                buttonText="Register Disaster"
                onButtonClick={handleAdd}
            />

            <div className="table-card">

                <input
                    className="search-box"
                    placeholder="Search Disaster..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <table className="custom-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Disaster</th>

                            <th>Location</th>

                            <th>Severity</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filtered.length > 0 ?

                                filtered.map((item) => (

                                    <tr key={item.id}>

                                        <td>{item.id}</td>

                                        <td>

                                            <FaExclamationTriangle color="#EF4444" />

                                            {" "}

                                            {item.disasterType}

                                        </td>

                                        <td>

                                            <FaMapMarkerAlt color="#1E88E5" />

                                            {" "}

                                            {item.location}

                                        </td>

                                        <td>

                                            {item.severity}

                                        </td>

                                        <td>

                                            <span

                                                className={

                                                    item.status === "Active"

                                                        ? "status-active"

                                                        : item.status === "Resolved"

                                                            ? "status-resolved"

                                                            : "status-pending"

                                                }

                                            >

                                                {item.status}

                                            </span>

                                        </td>

                                        <td>

                                            <button

                                                className="edit-btn"

                                                onClick={() => handleEdit(item)}

                                            >

                                                <FaEdit />

                                            </button>

                                            <button

                                                className="delete-btn"

                                                onClick={() => handleDelete(item.id)}

                                            >

                                                <FaTrash />

                                            </button>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td

                                        colSpan="6"

                                        style={{

                                            textAlign: "center",

                                            padding: "20px"

                                        }}

                                    >

                                        No Disasters Found

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

            <DisasterModal

                show={showModal}

                disaster={selectedDisaster}

                onClose={() => setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Disaster;