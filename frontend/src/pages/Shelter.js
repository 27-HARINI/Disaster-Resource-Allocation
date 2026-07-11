import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import ShelterModal from "../components/ShelterModal";
import "../styles/table.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
    FaEdit,
    FaTrash,
    FaHome,
    FaMapMarkerAlt,
    FaUsers
} from "react-icons/fa";

import {
    getShelters,
    addShelter,
    updateShelter,
    deleteShelter
} from "../services/shelterService";

function Shelter() {

    const [search, setSearch] = useState("");
    const [shelters, setShelters] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedShelter, setSelectedShelter] = useState(null);

    useEffect(() => {
        loadShelters();
    }, []);

    const loadShelters = () => {

        getShelters()

            .then((res) => {

                setShelters(res.data);

            })

            .catch(() => {

                toast.error("Failed to load shelters");

            });

    };

    const handleAdd = () => {

        setSelectedShelter(null);

        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedShelter(item);

        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedShelter) {

            updateShelter(selectedShelter.id, data)

                .then(() => {

                    toast.success("Shelter Updated Successfully");

                    loadShelters();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Update Failed");

                });

        } else {

            addShelter(data)

                .then(() => {

                    toast.success("Shelter Added Successfully");

                    loadShelters();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Failed to Add Shelter");

                });

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete Shelter?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#0A2540",

            cancelButtonColor: "#d33",

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                deleteShelter(id)

                    .then(() => {

                        toast.success("Shelter Deleted Successfully");

                        loadShelters();

                    })

                    .catch(() => {

                        toast.error("Delete Failed");

                    });

            }

        });

    };

    const filtered = shelters.filter((s) =>

        s.shelterName?.toLowerCase().includes(search.toLowerCase()) ||

        s.location?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader

                title="Shelter Management"

                subtitle="Manage emergency shelters."

                buttonText="Add Shelter"

                onButtonClick={handleAdd}

            />

            <div className="table-card">

                <input

                    className="search-box"

                    placeholder="Search Shelter..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                <table className="custom-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Shelter</th>

                            <th>Location</th>

                            <th>Capacity</th>

                            <th>Occupied</th>

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

                                            <FaHome color="#2563EB"/>

                                            {" "}

                                            {item.shelterName}

                                        </td>

                                        <td>

                                            <FaMapMarkerAlt color="#EF4444"/>

                                            {" "}

                                            {item.location}

                                        </td>

                                        <td>

                                            <FaUsers color="#16A34A"/>

                                            {" "}

                                            {item.capacity}

                                        </td>

                                        <td>

                                            {item.occupied}

                                        </td>

                                        <td>

                                            <span

                                                className={

                                                    item.status === "Available"

                                                        ? "status-active"

                                                        : item.status === "Full"

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

                                        colSpan="7"

                                        style={{

                                            textAlign: "center",

                                            padding: "20px"

                                        }}

                                    >

                                        No Shelters Found

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

            <ShelterModal

                show={showModal}

                shelter={selectedShelter}

                onClose={() => setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Shelter;