import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Addnote } from './Addnote'
import Notes from './Notes'
import noteContext from '../Context/Notes/noteContext'

function Home() {

    const history = useNavigate()

    const userStatus = useContext(noteContext)
    const { loggedIn } = userStatus

    useEffect(() => {
        if (loggedIn == false) {
            history('/cloudbook/login')
        }
    }, [loggedIn])


    return (
        <div>
            <Addnote />
            <Notes />
        </div>
    )
}

export default Home