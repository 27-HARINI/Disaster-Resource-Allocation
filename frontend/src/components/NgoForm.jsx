import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function NgoForm({ ngo, onClose, onSuccess }) {

    const [form, setForm] = useState({
        ngoName: "",
        contactPerson: "",
        phone: "",
        email: "",
        location: "",
        supportType: ""
    });

    useEffect(() => {

        if (ngo) {

            setForm({
                ngoName: ngo.ngoName,
                contactPerson: ngo.contactPerson,
                phone: ngo.phone,
                email: ngo.email,
                location: ngo.location,
                supportType: ngo.supportType
            });

        }

    }, [ngo]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (ngo) {

                await api.put(`/ngos/${ngo.id}`, form);
                alert("NGO Updated Successfully");

            } else {

                await api.post("/ngos", form);
                alert("NGO Added Successfully");

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
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="supportType"
                        placeholder="Support Type"
                        value={form.supportType}
                        onChange={handleChange}
                        required
                    />

                    <div className="button-group">

                        <button type="submit">

                            {ngo ? "Update" : "Save"}

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

export default NgoForm;