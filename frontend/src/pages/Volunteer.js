import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import VolunteerModal from "../components/VolunteerModal";
import "../styles/table.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
    FaEdit,
    FaTrash,
    FaHandsHelping,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

import {
    getVolunteers,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer
} from "../services/volunteerService";

function Volunteer() {

    const [search, setSearch] = useState("");
    const [volunteers, setVolunteers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    useEffect(() => {
        loadVolunteers();
    }, []);

    const loadVolunteers = () => {

        getVolunteers()
            .then((res) => {
                setVolunteers(res.data);
            })
            .catch(() => {
                toast.error("Failed to load volunteers");
            });

    };

    const handleAdd = () => {

        setSelectedVolunteer(null);
        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedVolunteer(item);
        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedVolunteer) {

            updateVolunteer(selectedVolunteer.id, data)

                .then(() => {

                    toast.success("Volunteer Updated Successfully");

                    loadVolunteers();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Update Failed");

                });

        } else {

            addVolunteer(data)

                .then(() => {

                    toast.success("Volunteer Added Successfully");

                    loadVolunteers();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Failed to Add Volunteer");

                });

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete Volunteer?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#0A2540",

            cancelButtonColor: "#d33",

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                deleteVolunteer(id)

                    .then(() => {

                        toast.success("Volunteer Deleted Successfully");

                        loadVolunteers();

                    })

                    .catch(() => {

                        toast.error("Delete Failed");

                    });

            }

        });

    };

    const filtered = volunteers.filter((v) =>

        v.fullName?.toLowerCase().includes(search.toLowerCase()) ||

        v.skill?.toLowerCase().includes(search.toLowerCase()) ||

        v.email?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader
                title="Volunteer Management"
                subtitle="Manage disaster response volunteers."
                buttonText="Add Volunteer"
                onButtonClick={handleAdd}
            />

            <div className="table-card">

                <input
                    className="search-box"
                    placeholder="Search Volunteer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <table className="custom-table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Skill</th>
                            <th>Availability</th>
                            <th>Task</th>
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

                                            <FaHandsHelping color="#2563EB"/>

                                            {" "}

                                            {item.fullName}

                                        </td>

                                        <td>

                                            <FaPhone color="#16A34A"/>

                                            {" "}

                                            {item.phone}

                                        </td>

                                        <td>

                                            <FaEnvelope color="#EF4444"/>

                                            {" "}

                                            {item.email}

                                        </td>

                                        <td>{item.skill}</td>

                                        <td>

                                            <span

                                                className={

                                                    item.availability === "Available"

                                                        ? "status-active"

                                                        : item.availability === "Busy"

                                                        ? "status-pending"

                                                        : "status-resolved"

                                                }

                                            >

                                                {item.availability}

                                            </span>

                                        </td>

                                        <td>

                                            {item.assignedTask || "-"}

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

                                        No Volunteers Found

                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

            <VolunteerModal

                show={showModal}

                volunteer={selectedVolunteer}

                onClose={() => setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Volunteer;