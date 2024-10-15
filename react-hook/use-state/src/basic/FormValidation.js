import React, {useState} from 'react';

const LoginForm = () => {
    // Your state and logic here
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        (email==='' || password==='') ? setError(true): setError(false);
        setEmail('');
        setPassword('');
    };

    return (
        <>
            
        <form onSubmit={handleSubmit}>

            <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button>Submit</button>
            {error===true && <p>Error: All fields are required</p>}
        </form>
        </>
        
    );
};

export default LoginForm;