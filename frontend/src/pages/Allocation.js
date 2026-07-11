import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import PageHeader from "../components/PageHeader";
import AllocationModal from "../components/AllocationModal";
import "../styles/table.css";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

import { FaEdit, FaTrash } from "react-icons/fa";

import {
    getAllocations,
    addAllocation,
    updateAllocation,
    deleteAllocation
} from "../services/allocationService";

import { getDisasters } from "../services/disasterService";
import { getResources } from "../services/resourceService";
import { getVolunteers } from "../services/volunteerService";
import { getNgos } from "../services/ngoService";
import { getShelters } from "../services/shelterService";

function Allocation() {

    const [allocations, setAllocations] = useState([]);
    const [disasters, setDisasters] = useState([]);
    const [resources, setResources] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [ngos, setNgos] = useState([]);
    const [shelters, setShelters] = useState([]);

    const [search, setSearch] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [selectedAllocation, setSelectedAllocation] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = () => {

        getAllocations().then(res => setAllocations(res.data));

        getDisasters().then(res => setDisasters(res.data));

        getResources().then(res => setResources(res.data));

        getVolunteers().then(res => setVolunteers(res.data));

        getNgos().then(res => setNgos(res.data));

        getShelters().then(res => setShelters(res.data));

    };

    const handleAdd = () => {

        setSelectedAllocation(null);

        setShowModal(true);

    };

    const handleEdit = (item) => {

        setSelectedAllocation(item);

        setShowModal(true);

    };

    const handleSave = (data) => {

        if (selectedAllocation) {

            updateAllocation(selectedAllocation.id, data)

                .then(() => {

                    toast.success("Allocation Updated");

                    loadData();

                    setShowModal(false);

                })

                .catch(() => toast.error("Update Failed"));

        }

        else {

            addAllocation(data)

                .then(() => {

                    toast.success("Resource Allocated");

                    loadData();

                    setShowModal(false);

                })

                .catch(() => toast.error("Allocation Failed"));

        }

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete Allocation?",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Delete"

        }).then(result => {

            if (result.isConfirmed) {

                deleteAllocation(id)

                    .then(() => {

                        toast.success("Allocation Deleted");

                        loadData();

                    });

            }

        });

    };

    const filtered = allocations.filter(a =>

        a.disaster?.disasterType?.toLowerCase().includes(search.toLowerCase()) ||

        a.resource?.resourceName?.toLowerCase().includes(search.toLowerCase()) ||

        a.volunteer?.fullName?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <AdminLayout>

            <PageHeader

                title="Resource Allocation"

                subtitle="Allocate disaster resources"

                buttonText="New Allocation"

                onButtonClick={handleAdd}

            />

            <div className="table-card">

                <input

                    className="search-box"

                    placeholder="Search..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

                <table className="custom-table">

                    <thead>

                    <tr>

                        <th>ID</th>

                        <th>Disaster</th>

                        <th>Resource</th>

                        <th>Volunteer</th>

                        <th>NGO</th>

                        <th>Shelter</th>

                        <th>Qty</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        filtered.length>0 ?

                        filtered.map(item=>(

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>{item.disaster?.disasterType}</td>

                                <td>{item.resource?.resourceName}</td>

                                <td>{item.volunteer?.fullName}</td>

                                <td>{item.ngo?.ngoName}</td>

                                <td>{item.shelter?.shelterName}</td>

                                <td>{item.quantityAllocated}</td>

                                <td>

                                    <span

                                        className={

                                            item.status==="Allocated"

                                            ?"status-active"

                                            :item.status==="Delivered"

                                            ?"status-resolved"

                                            :"status-pending"

                                        }

                                    >

                                        {item.status}

                                    </span>

                                </td>

                                <td>

                                    <button

                                        className="edit-btn"

                                        onClick={()=>handleEdit(item)}

                                    >

                                        <FaEdit/>

                                    </button>

                                    <button

                                        className="delete-btn"

                                        onClick={()=>handleDelete(item.id)}

                                    >

                                        <FaTrash/>

                                    </button>

                                </td>

                            </tr>

                        ))

                        :

                        <tr>

                            <td

                                colSpan="9"

                                style={{

                                    textAlign:"center",

                                    padding:"20px"

                                }}

                            >

                                No Allocations Found

                            </td>

                        </tr>

                    }

                    </tbody>

                </table>

            </div>

            <AllocationModal

                show={showModal}

                allocation={selectedAllocation}

                disasters={disasters}

                resources={resources}

                volunteers={volunteers}

                ngos={ngos}

                shelters={shelters}

                onClose={()=>setShowModal(false)}

                onSave={handleSave}

            />

        </AdminLayout>

    );

}

export default Allocation;