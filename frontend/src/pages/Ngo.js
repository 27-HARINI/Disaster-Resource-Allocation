import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import NgoModal from "../components/NgoModal";
import "../styles/table.css";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
    FaEdit,
    FaTrash,
    FaBuilding,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

import {
    getNgos,
    addNgo,
    updateNgo,
    deleteNgo
} from "../services/ngoService";

function Ngo() {

    const [search, setSearch] = useState("");
    const [ngos, setNgos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedNgo, setSelectedNgo] = useState(null);

    useEffect(() => {
        loadNgos();
    }, []);

    const loadNgos = () => {

        getNgos()

            .then((res) => {

                setNgos(res.data);

            })

            .catch(() => {

                toast.error("Failed to load NGOs");

            });

    };

    const handleAdd = () => {

        setSelectedNgo(null);

        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedNgo(item);

        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedNgo) {

            updateNgo(selectedNgo.id, data)

                .then(() => {

                    toast.success("NGO Updated Successfully");

                    loadNgos();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Update Failed");

                });

        } else {

            addNgo(data)

                .then(() => {

                    toast.success("NGO Added Successfully");

                    loadNgos();

                    setShowModal(false);

                })

                .catch(() => {

                    toast.error("Failed to Add NGO");

                });

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete NGO?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#0A2540",

            cancelButtonColor: "#d33",

            confirmButtonText: "Delete"

        }).then((result) => {

            if (result.isConfirmed) {

                deleteNgo(id)

                    .then(() => {

                        toast.success("NGO Deleted Successfully");

                        loadNgos();

                    })

                    .catch(() => {

                        toast.error("Delete Failed");

                    });

            }

        });

    };

    const filtered = ngos.filter((n) =>

        n.ngoName?.toLowerCase().includes(search.toLowerCase()) ||

        n.contactPerson?.toLowerCase().includes(search.toLowerCase()) ||

        n.location?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader

                title="NGO Management"

                subtitle="Manage registered NGOs."

                buttonText="Add NGO"

                onButtonClick={handleAdd}

            />

            <div className="table-card">

                <input

                    className="search-box"

                    placeholder="Search NGO..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                <table className="custom-table">

                    <thead>

                    <tr>

                        <th>ID</th>

                        <th>NGO</th>

                        <th>Contact</th>

                        <th>Phone</th>

                        <th>Email</th>

                        <th>Location</th>

                        <th>Specialization</th>

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

                                        <FaBuilding color="#2563EB"/>

                                        {" "}

                                        {item.ngoName}

                                    </td>

                                    <td>

                                        {item.contactPerson}

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

                                    <td>

                                        <FaMapMarkerAlt color="#F59E0B"/>

                                        {" "}

                                        {item.location}

                                    </td>

                                    <td>

                                        {item.specialization}

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

                                    No NGOs Found

                                </td>

                            </tr>

                    }

                    </tbody>

                </table>

            </div>

            <NgoModal

                show={showModal}

                ngo={selectedNgo}

                onClose={() => setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Ngo;