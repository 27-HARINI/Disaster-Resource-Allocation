import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function AllocationForm({ allocation, onClose, onSuccess }) {

    const [form, setForm] = useState({
        disasterId: "",
        resourceId: "",
        volunteerId: "",
        ngoId: "",
        shelterId: "",
        quantityAllocated: "",
        status: "Allocated"
    });

    const [disasters, setDisasters] = useState([]);
    const [resources, setResources] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [ngos, setNgos] = useState([]);
    const [shelters, setShelters] = useState([]);

    useEffect(() => {

        loadData();

        if (allocation) {

            setForm({

                disasterId: allocation.disaster?.id || "",
                resourceId: allocation.resource?.id || "",
                volunteerId: allocation.volunteer?.id || "",
                ngoId: allocation.ngo?.id || "",
                shelterId: allocation.shelter?.id || "",
                quantityAllocated: allocation.quantityAllocated,
                status: allocation.status

            });

        }

    }, [allocation]);

    const loadData = async () => {

        try {

            const disasterRes = await api.get("/disasters");
            const resourceRes = await api.get("/resources");
            const volunteerRes = await api.get("/volunteers");
            const ngoRes = await api.get("/ngos");
            const shelterRes = await api.get("/shelters");

            setDisasters(disasterRes.data);
            setResources(resourceRes.data);
            setVolunteers(volunteerRes.data);
            setNgos(ngoRes.data);
            setShelters(shelterRes.data);

        } catch (err) {

            console.error(err);

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (allocation) {

                await api.put(`/allocations/${allocation.id}`, form);
                alert("Allocation Updated Successfully");

            } else {

                await api.post("/allocations", form);
                alert("Allocation Added Successfully");

            }

            onSuccess();
            onClose();

        } catch (err) {

            console.error(err);
            alert("Operation Failed");

        }

    };

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {allocation ? "Edit Allocation" : "New Allocation"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <select
                        name="disasterId"
                        value={form.disasterId}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select Disaster</option>

                        {disasters.map(d => (

                            <option key={d.id} value={d.id}>

                                {d.disasterType}

                            </option>

                        ))}

                    </select>

                    <select
                        name="resourceId"
                        value={form.resourceId}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select Resource</option>

                        {resources.map(r => (

                            <option key={r.id} value={r.id}>

                                {r.resourceName}

                            </option>

                        ))}

                    </select>

                    <select
                        name="volunteerId"
                        value={form.volunteerId}
                        onChange={handleChange}
                    >

                        <option value="">Select Volunteer</option>

                        {volunteers.map(v => (

                            <option key={v.id} value={v.id}>

                                {v.fullName}

                            </option>

                        ))}

                    </select>

                    <select
                        name="ngoId"
                        value={form.ngoId}
                        onChange={handleChange}
                    >

                        <option value="">Select NGO</option>

                        {ngos.map(n => (

                            <option key={n.id} value={n.id}>

                                {n.ngoName}

                            </option>

                        ))}

                    </select>

                    <select
                        name="shelterId"
                        value={form.shelterId}
                        onChange={handleChange}
                    >

                        <option value="">Select Shelter</option>

                        {shelters.map(s => (

                            <option key={s.id} value={s.id}>

                                {s.shelterName}

                            </option>

                        ))}

                    </select>

                    <input
                        type="number"
                        name="quantityAllocated"
                        placeholder="Quantity Allocated"
                        value={form.quantityAllocated}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >

                        <option>Allocated</option>
                        <option>Completed</option>
                        <option>Pending</option>

                    </select>

                    <div className="button-group">

                        <button type="submit">

                            {allocation ? "Update" : "Save"}

                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AllocationForm;