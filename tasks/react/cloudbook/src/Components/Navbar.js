import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import alertContext from '../Context/Alert/alertContext';
import loadingContext from '../Context/LoadingBar/loaderContext';
import noteContext from '../Context/Notes/noteContext';

function Navbar() {
    let location = useLocation();

    const alertcontext = useContext(alertContext)
    const { showAlert } = alertcontext

    const userStatus = useContext(noteContext)
    const { setloggedIn } = userStatus

    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    const handleLogout = () => {
        setloggedIn(false)
        setProgress(20)
        localStorage.removeItem('token');
        setProgress(60)
        showAlert("Logged out succesfully", "success")
        setProgress(100)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/cloudbook">Cloudbook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/cloudbook' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/cloudbook/about' ? "active" : ""}`} to="/cloudbook/about">About</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {(localStorage.getItem('token') ?
                            <Link onClick={handleLogout} className="btn btn-primary mx-1" to="/cloudbook/login" role="button">Logout</Link>
                            :
                            <>
                                <Link className="btn btn-primary mx-1" to="/cloudbook/login" role="button">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/cloudbook/signup" role="button">Signup</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar