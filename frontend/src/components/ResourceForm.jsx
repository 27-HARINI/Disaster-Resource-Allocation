import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/form.css";

function ResourceForm({ resource, onClose, onSuccess }) {

    const [form, setForm] = useState({
        resourceName: "",
        resourceType: "",
        quantity: "",
        availableQuantity: "",
        location: "",
        status: "Available"
    });

    useEffect(() => {

        if (resource) {

            setForm({
                resourceName: resource.resourceName,
                resourceType: resource.resourceType,
                quantity: resource.quantity,
                availableQuantity: resource.availableQuantity,
                location: resource.location,
                status: resource.status
            });

        }

    }, [resource]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (resource) {

                await api.put(`/resources/${resource.id}`, form);
                alert("Resource Updated Successfully");

            } else {

                await api.post("/resources", form);
                alert("Resource Added Successfully");

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

                    {resource ? "Edit Resource" : "Add Resource"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="resourceName"
                        placeholder="Resource Name"
                        value={form.resourceName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="resourceType"
                        placeholder="Resource Type"
                        value={form.resourceType}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="availableQuantity"
                        placeholder="Available Quantity"
                        value={form.availableQuantity}
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

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >

                        <option>Available</option>
                        <option>Unavailable</option>

                    </select>

                    <div className="button-group">

                        <button type="submit">

                            {resource ? "Update" : "Save"}

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

export default ResourceForm;