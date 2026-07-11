import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function DisasterForm({ disaster, onClose, onSuccess }) {

    const [form, setForm] = useState({
        disasterType: "",
        location: "",
        severity: "",
        description: "",
        status: "Active"
    });

    useEffect(() => {

        if (disaster) {

            setForm({
                disasterType: disaster.disasterType,
                location: disaster.location,
                severity: disaster.severity,
                description: disaster.description,
                status: disaster.status
            });

        }

    }, [disaster]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (disaster) {

                await api.put(`/disasters/${disaster.id}`, form);
                alert("Disaster Updated Successfully");

            } else {

                await api.post("/disasters", form);
                alert("Disaster Added Successfully");

            }

            onSuccess();
            onClose();

        } catch (error) {

            console.error(error);
            alert("Operation Failed");

        }

    };

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {disaster ? "Edit Disaster" : "Add Disaster"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="disasterType"
                        placeholder="Disaster Type"
                        value={form.disasterType}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="severity"
                        value={form.severity}
                        onChange={handleChange}
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                    </select>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        required
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option>Active</option>
                        <option>Resolved</option>
                    </select>

                    <div className="button-group">

                        <button type="submit">

                            {disaster ? "Update" : "Save"}

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

export default DisasterForm;