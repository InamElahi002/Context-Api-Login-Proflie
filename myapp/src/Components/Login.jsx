import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUser({ username: name, password }); 
    }

    return (
        <div>
            <h2>Login!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your name:
                    <input
                        type="text " placeholder="Enter your Username"value={name}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Your password:
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
