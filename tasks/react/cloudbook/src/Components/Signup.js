import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';
import { Link, useNavigate } from "react-router-dom";
import alertContext from '../Context/Alert/alertContext';
import loadingContext from '../Context/LoadingBar/loaderContext';

function Signup() {

    const context = useContext(noteContext)
    const alertcontext = useContext(alertContext)

    const { host } = context;
    const { showAlert } = alertcontext;

    const userStatus = useContext(noteContext)
    const { setloggedIn } = userStatus

    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    let history = useNavigate()

    const [user, setuser] = useState({ name: "", email: "", password: "", cpassword: "" })

    const handlechange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = async (e) => {
        setProgress(20)
        e.preventDefault();
        const response = await fetch(`${host}/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
        });
        setProgress(60)
        const json = await response.json();
        if (json.success === true) {
            localStorage.setItem('token', json.authtoken)
            setloggedIn(true)
            history("/cloudbook")
            showAlert("Account created Successfully", "success")
        } else {
            if (json.error) {
                showAlert(json.error, "danger")
            }
            else {
                showAlert("Please enter valid credentials", "danger")
            }
        }
        setProgress(100)
    }

    return (
        <>{(localStorage.getItem('token') ?
            <div style={{ height: "70vh" }} className='conatainer d-flex flex-column justify-content-center align-items-center'>
                <h2>You are already logged in!</h2>
                <h4>Want to <Link onClick={() => { setProgress(20); localStorage.removeItem('token'); setProgress(100) }} to='/signup'>register</Link> as a new user ?</h4>
                <button type="button" className="btn btn-light mt-3" onClick={() => { setProgress(20); history("/"); setProgress(100) }}>Go Back</button>
            </div>
            :
            <div className='container'>
                <form onSubmit={handleClick}>
                    <h2>Register yourself to use Cloudbook</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" onChange={handlechange} className="form-control" id="name" name='name' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" onChange={handlechange} className="form-control" id="email" name='email' aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={handlechange} className="form-control" id="password" name='password' required minLength={3} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" onChange={handlechange} className="form-control" id="cpassword" name='cpassword' required minLength={3} />
                    </div>
                    <button disabled={user.cpassword !== user.password} type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )}</>
    )
}

export default Signup