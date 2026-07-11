import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import ResourceModal from "../components/ResourceModal";
import "../styles/table.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
    FaEdit,
    FaTrash,
    FaBoxOpen,
    FaMapMarkerAlt
} from "react-icons/fa";

import {
    getResources,
    addResource,
    updateResource,
    deleteResource
} from "../services/resourceService";

function Resource() {

    const [search, setSearch] = useState("");
    const [resources, setResources] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

    useEffect(() => {
        loadResources();
    }, []);

    const loadResources = () => {

        getResources()
            .then((res) => {
                setResources(res.data);
            })
            .catch(() => {
                toast.error("Failed to load resources");
            });

    };

    const handleAdd = () => {

        setSelectedResource(null);
        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedResource(item);
        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedResource) {

            updateResource(selectedResource.id, data)

                .then(() => {

                    toast.success("Resource Updated Successfully");

                    loadResources();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Update Failed");

                });

        } else {

            addResource(data)

                .then(() => {

                    toast.success("Resource Added Successfully");

                    loadResources();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Failed to Add Resource");

                });

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete Resource?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#0A2540",

            cancelButtonColor: "#d33",

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                deleteResource(id)

                    .then(() => {

                        toast.success("Resource Deleted Successfully");

                        loadResources();

                    })

                    .catch(() => {

                        toast.error("Delete Failed");

                    });

            }

        });

    };

    const filtered = resources.filter((r) =>

        r.resourceName?.toLowerCase().includes(search.toLowerCase()) ||

        r.resourceType?.toLowerCase().includes(search.toLowerCase()) ||

        r.location?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader
                title="Resource Management"
                subtitle="Manage all disaster resources."
                buttonText="Add Resource"
                onButtonClick={handleAdd}
            />

            <div className="table-card">

                <input
                    className="search-box"
                    placeholder="Search Resource..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <table className="custom-table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Resource</th>
                            <th>Type</th>
                            <th>Total Qty</th>
                            <th>Available</th>
                            <th>Location</th>
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

                                            <FaBoxOpen color="#2563EB" />

                                            {" "}

                                            {item.resourceName}

                                        </td>

                                        <td>

                                            {item.resourceType}

                                        </td>

                                        <td>

                                            {item.quantity}

                                        </td>

                                        <td>

                                            {item.availableQuantity}

                                        </td>

                                        <td>

                                            <FaMapMarkerAlt color="#EF4444"/>

                                            {" "}

                                            {item.location}

                                        </td>

                                        <td>

                                            <span

                                                className={

                                                    item.status === "Available"

                                                        ? "status-active"

                                                        : item.status === "Limited"

                                                            ? "status-pending"

                                                            : "status-resolved"

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

                                                <FaEdit/>

                                            </button>

                                            <button

                                                className="delete-btn"

                                                onClick={() => handleDelete(item.id)}

                                            >

                                                <FaTrash/>

                                            </button>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td
                                        colSpan="8"
                                        style={{
                                            textAlign: "center",
                                            padding: "20px"
                                        }}
                                    >

                                        No Resources Found

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

            <ResourceModal

                show={showModal}

                resource={selectedResource}

                onClose={() => setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Resource;