import { useEffect, useState } from "react";
import "../styles/Modal.css";

function ResourceModal({

    show,
    onClose,
    onSave,
    resource

}){

    const [form,setForm]=useState({

        resourceName:"",
        resourceType:"",
        quantity:"",
        availableQuantity:"",
        location:"",
        status:""

    });

    useEffect(()=>{

        if(resource){

            setForm(resource);

        }else{

            setForm({

                resourceName:"",
                resourceType:"",
                quantity:"",
                availableQuantity:"",
                location:"",
                status:""

            });

        }

    },[resource]);

    if(!show) return null;

    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        onSave(form);

    };

    return(

        <div className="modal-overlay">

            <div className="modal-box">

                <h2>

                    {

                        resource

                        ?

                        "Edit Resource"

                        :

                        "Add Resource"

                    }

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

                        placeholder="Total Quantity"

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

                        required

                    >

                        <option value="">Status</option>

                        <option>Available</option>

                        <option>Limited</option>

                        <option>Out of Stock</option>

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

export default ResourceModal;