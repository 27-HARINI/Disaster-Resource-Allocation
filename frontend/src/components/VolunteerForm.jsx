import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function VolunteerForm({ volunteer, onClose, onSuccess }) {

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        skill: "",
        availability: "",
        assignedTask: ""
    });

    useEffect(() => {

        if (volunteer) {

            setForm({
                fullName: volunteer.fullName,
                phone: volunteer.phone,
                email: volunteer.email,
                skill: volunteer.skill,
                availability: volunteer.availability,
                assignedTask: volunteer.assignedTask
            });

        }

    }, [volunteer]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (volunteer) {

                await api.put(`/volunteers/${volunteer.id}`, form);
                alert("Volunteer Updated Successfully");

            } else {

                await api.post("/volunteers", form);
                alert("Volunteer Added Successfully");

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

                    {volunteer ? "Edit Volunteer" : "Add Volunteer"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="fullName"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="skill"
                        placeholder="Skill"
                        value={form.skill}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="availability"
                        placeholder="Availability"
                        value={form.availability}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="assignedTask"
                        placeholder="Assigned Task"
                        value={form.assignedTask}
                        onChange={handleChange}
                    />

                    <div className="button-group">

                        <button type="submit">

                            {volunteer ? "Update" : "Save"}

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

export default VolunteerForm;