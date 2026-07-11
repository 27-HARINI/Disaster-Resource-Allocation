import { useEffect, useState } from "react";
import "../styles/Modal.css";

function DisasterModal({

    show,
    onClose,
    onSave,
    disaster

}){

    const [form,setForm]=useState({

        disasterType:"",
        location:"",
        severity:"",
        description:"",
        status:""

    });

    useEffect(()=>{

        if(disaster){

            setForm(disaster);

        }else{

            setForm({

                disasterType:"",
                location:"",
                severity:"",
                description:"",
                status:""

            });

        }

    },[disaster]);

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

                        disaster

                        ?

                        "Edit Disaster"

                        :

                        "Register Disaster"

                    }

                </h2>

                <form onSubmit={handleSubmit}>

                    <input

                        name="disasterType"

                        placeholder="Disaster Type"

                        value={form.disasterType}

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

                        name="severity"

                        value={form.severity}

                        onChange={handleChange}

                        required

                    >

                        <option value="">Select Severity</option>

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

                    />

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                        required

                    >

                        <option value="">Select Status</option>

                        <option>Active</option>

                        <option>Pending</option>

                        <option>Resolved</option>

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

export default DisasterModal;