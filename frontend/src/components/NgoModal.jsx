import { useEffect, useState } from "react";
import "../styles/Modal.css";

function NgoModal({ show, onClose, onSave, ngo }) {

    const [form, setForm] = useState({
        ngoName: "",
        contactPerson: "",
        phone: "",
        email: "",
        location: "",
        specialization: ""
    });

    useEffect(() => {

        if (ngo) {

            setForm(ngo);

        } else {

            setForm({
                ngoName: "",
                contactPerson: "",
                phone: "",
                email: "",
                location: "",
                specialization: ""
            });

        }

    }, [ngo]);

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

                    {ngo ? "Edit NGO" : "Add NGO"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="ngoName"
                        placeholder="NGO Name"
                        value={form.ngoName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="contactPerson"
                        placeholder="Contact Person"
                        value={form.contactPerson}
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
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="specialization"
                        placeholder="Specialization"
                        value={form.specialization}
                        onChange={handleChange}
                        required
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

export default NgoModal;