import { useEffect, useState } from "react";
import "../styles/Modal.css";

function ShelterModal({ show, onClose, onSave, shelter }) {

    const [form, setForm] = useState({
        shelterName: "",
        location: "",
        capacity: "",
        occupied: "",
        status: ""
    });

    useEffect(() => {

        if (shelter) {

            setForm(shelter);

        } else {

            setForm({
                shelterName: "",
                location: "",
                capacity: "",
                occupied: "",
                status: ""
            });

        }

    }, [shelter]);

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
                        required
                    >

                        <option value="">Status</option>
                        <option>Available</option>
                        <option>Full</option>
                        <option>Maintenance</option>

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

export default ShelterModal;