import { useEffect, useState } from "react";
import "../styles/Modal.css";

function VolunteerModal({

    show,
    onClose,
    onSave,
    volunteer

}) {

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

            setForm(volunteer);

        } else {

            setForm({

                fullName: "",
                phone: "",
                email: "",
                skill: "",
                availability: "",
                assignedTask: ""

            });

        }

    }, [volunteer]);

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

                    {

                        volunteer

                            ? "Edit Volunteer"

                            : "Add Volunteer"

                    }

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
                        placeholder="Phone"
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

                    <select
                        name="availability"
                        value={form.availability}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Availability</option>

                        <option>Available</option>

                        <option>Busy</option>

                        <option>Unavailable</option>

                    </select>

                    <input
                        name="assignedTask"
                        placeholder="Assigned Task"
                        value={form.assignedTask}
                        onChange={handleChange}
                    />

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

export default VolunteerModal;