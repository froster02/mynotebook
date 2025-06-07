import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail'); // Add this line
        navigate('/login');
    }
    let location = useLocation();
    const userEmail = localStorage.getItem('userEmail'); // Add this line

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? 
                            <form className="d-flex">
                                <Link className="btn btn-primary mx-1" to="/login" type="button">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/signup" type="button">SignUp</Link>
                            </form> 
                            : 
                            <div className="d-flex align-items-center">
                                <span className="text-light me-3">{userEmail}</span>
                                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar