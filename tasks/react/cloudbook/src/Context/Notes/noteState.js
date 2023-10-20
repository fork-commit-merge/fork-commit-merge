import { useContext, useState } from "react";
import alertContext from "../Alert/alertContext";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const [loggedIn, setloggedIn] = useState(false)

    const alertcontext = useContext(alertContext)
    const { showAlert } = alertcontext


    const initialNotes = []

    const [notes, setnotes] = useState(initialNotes)

    const server = process.env.REACT_APP_SERVER;
    // const server = "http://localhost:5000/"
    const host = `${server}api`

    // Getting all notes
    const getnotes = async () => {
        // API call
        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setnotes(json);
    }

    // Adding a note
    const addnote = async (title, description, tag = "default") => {
        // API Call
        const response = await fetch(`${host}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        if (json.user) {

            // for frontend
            const newnote = {
                _id: json._id,
                title: json.title,
                description: json.description,
                tag: json.tag
            }
            setnotes(notes.concat(newnote))
        }
        else {
            showAlert("unable to add notes", "danger")
        }
        // getnotes();
    }

    // Deleting a note
    const deletenote = async (id) => {
        // API Call
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        // getnotes();

        // For frontend
        const newnotes = notes.filter(note => {
            return note._id !== id
        })

        setnotes(newnotes)
    }

    // Editing a note
    const editnote = async (title, description, tag, id) => {
        // API Call
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        // getnotes();

        // for frontend
        const newnotes = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < newnotes.length; i++) {
            const element = newnotes[i];
            if (element._id === id) {
                newnotes[i].title = title;
                newnotes[i].description = description;
                newnotes[i].tag = tag;
            }
        }
        setnotes(newnotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote, getnotes, host, loggedIn, setloggedIn }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState