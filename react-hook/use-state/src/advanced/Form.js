import React, { useState } from 'react';

const Form = () => {
    // logic start here
    const [formData, setFormData] = useState({name:"", age:"", email:""});
    const [submittedData,setSubmittedData] = useState(null);

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({name:'', age:'', email:''})
    };

    return (
        <div style={{margin: '20px'}} onSubmit={handleSubmit}>
            <form action="">
                <label name="name" >Name: </label>
                <input type="text" name="name" value={formData.name} onChange={ handleOnChange}/>
                <br />
                <label htmlFor="">Age: </label>
                <input type="number" name="age" value={formData.age} onChange={ handleOnChange}/>
                <br />
                <label htmlFor="">Email: </label>
                <input type="email" name="email" value={formData.email} onChange={ handleOnChange}/>
                <br />
                <button type="submit">Submit</button>
            </form>
            {/*Display submitted data */}
            {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
        </div>
    );
};

export default Form;