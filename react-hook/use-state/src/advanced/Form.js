import React, { useState } from "react";
import "./mystyle.css";

const Form = () => {
    // logic start here
    const [formData, setFormData] = useState({ name: "", age: "", email: "" });
    const [submittedData, setSubmittedData] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: "", age: "", email: "" });
    };

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Dynamically update the state based on input name
    };

    return (
        <div style={{ marginTop: "50px" }}>
            <form onSubmit={handleSubmit}>
                <div className="marginBottom">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleOnchange}
                    />
                </div>

                <div className="marginBottom">
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        value={formData.age}
                        name="age"
                        onChange={handleOnchange}
                    />
                </div>

                <div className="marginBottom">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleOnchange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <p>Name: {submittedData.name}</p>
                    <p>Age: {submittedData.age}</p>
                    <p>Name: {submittedData.email}</p>
                </div>
            )}
        </div>
    );
};

export default Form;
