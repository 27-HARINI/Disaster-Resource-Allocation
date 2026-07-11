import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function ShelterForm({ shelter, onClose, onSuccess }) {

    const [form, setForm] = useState({
        shelterName: "",
        location: "",
        capacity: "",
        occupied: "",
        status: "Available"
    });

    useEffect(() => {

        if (shelter) {

            setForm({
                shelterName: shelter.shelterName,
                location: shelter.location,
                capacity: shelter.capacity,
                occupied: shelter.occupied,
                status: shelter.status
            });

        }

    }, [shelter]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (shelter) {

                await api.put(`/shelters/${shelter.id}`, form);
                alert("Shelter Updated Successfully");

            } else {

                await api.post("/shelters", form);
                alert("Shelter Added Successfully");

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

                    {shelter ? "Edit Shelter" : "Add Shelter"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="shelterName"
                        placeholder="Shelter Name"
                        value={form.shelterName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        value={form.capacity}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="occupied"
                        placeholder="Occupied"
                        value={form.occupied}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option>Available</option>
                        <option>Full</option>
                        <option>Closed</option>
                    </select>

                    <div className="button-group">

                        <button type="submit">

                            {shelter ? "Update" : "Save"}

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

export default ShelterForm;