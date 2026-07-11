import { useEffect, useState } from "react";
import "../styles/Modal.css";

function AllocationModal({
    show,
    onClose,
    onSave,
    allocation,
    disasters,
    resources,
    volunteers,
    ngos,
    shelters
}) {

    const [form, setForm] = useState({
        disasterId: "",
        resourceId: "",
        volunteerId: "",
        ngoId: "",
        shelterId: "",
        quantityAllocated: "",
        status: ""
    });

    useEffect(() => {

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

        } else {

            setForm({
                disasterId: "",
                resourceId: "",
                volunteerId: "",
                ngoId: "",
                shelterId: "",
                quantityAllocated: "",
                status: ""
            });

        }

    }, [allocation]);

    if (!show) return null;

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(form);

    };

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <h2>

                    {allocation ? "Edit Allocation" : "Allocate Resource"}

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
                        required
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
                        required
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
                        required
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
                        placeholder="Quantity"
                        value={form.quantityAllocated}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Status</option>
                        <option>Allocated</option>
                        <option>Pending</option>
                        <option>Delivered</option>

                    </select>

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AllocationModal;