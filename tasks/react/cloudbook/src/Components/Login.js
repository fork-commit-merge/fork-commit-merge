import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';
import { useNavigate } from "react-router-dom";
import alertContext from '../Context/Alert/alertContext';
import { Link } from 'react-router-dom'
import loadingContext from '../Context/LoadingBar/loaderContext';

function Login() {

    const context = useContext(noteContext)
    const userStatus = useContext(noteContext)
    const { setloggedIn } = userStatus
    const alertcontext = useContext(alertContext)
    const { host } = context;
    const { showAlert } = alertcontext;

    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    let history = useNavigate()

    const [user, setuser] = useState({ email: "", password: "" })

    const handlechange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = async (e) => {
        setProgress(20)
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, password: user.password })
        });
        setProgress(60)
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            setloggedIn(true)
            history("/cloudbook")
            showAlert("Logged in Successfully", "success")
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
        <>
            {localStorage.getItem('token') ?
                <div style={{ height: "70vh" }} className='conatainer d-flex flex-column justify-content-center align-items-center'>
                    <h2>You are already logged in!</h2>
                    <h4>Want to <Link onClick={() => { setProgress(20); localStorage.removeItem('token'); setProgress(100) }} to='/signup'>register</Link> as a new user ?</h4>
                    <button type="button" className="btn btn-light mt-3" onClick={() => { setProgress(20); history("/"); setProgress(100) }}>Go Back</button>
                </div>
                :
                <div className='container my-3'>
                    <h2>Login to Cloudbook</h2>
                    <form className='my-3' onSubmit={handleClick}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={handlechange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={handlechange} />
                        </div>
                        {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div> */}
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>}
        </>
    )
}

export default Login