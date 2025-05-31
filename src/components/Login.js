import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAlert }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5010/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });

            const json = await response.json();
            console.log("Login response:", json);

            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                navigate('/');
                setAlert("Login success", "success");
            } else {
                setAlert(json.error || "Invalid credentials", "danger");
            }
        } catch (error) {
            console.error("Login error:", error);
            setAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container my-3">
                <div className="mb-3">
                    <label htmlFor="email-input" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        name="email"
                        autoComplete="username email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password-input" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password-input"
                        name="password"
                        autoComplete="current-password"
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
