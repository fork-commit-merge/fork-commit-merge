import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from '../Context/Alert/alertContext';
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
import loadingContext from '../Context/LoadingBar/loaderContext';

function Notes() {

    const context = useContext(noteContext);
    const alertcontext = useContext(alertContext);
    const { showAlert } = alertcontext;
    const { notes, getnotes, editnote } = context


    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    const navigate = useNavigate();

    const [note, setnote] = useState({ title: "", description: "", tag: "", id: "" })

    const ref = useRef(null)
    const refClose = useRef(null)

    useEffect(() => {
        setProgress(30)
        if (localStorage.getItem('token')) {
            setProgress(90)
            getnotes();
        } else {
            setProgress(90)
            navigate("/login")
            showAlert("Login First", "primary")
        }
        setProgress(100)
        // eslint-disable-next-line
    }, [])

    const updatenote = (currentnote) => {
        setProgress(50)
        setnote({ title: currentnote.title, description: currentnote.description, tag: currentnote.tag, id: currentnote._id })
        setProgress(100)
        ref.current.click()
    }

    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        setProgress(20)
        e.preventDefault();
        setProgress(40)
        editnote(note.title, note.description, note.tag, note.id);
        refClose.current.click();
        setProgress(80)
        showAlert("Updated Successfully", "success")
        setProgress(100)
    }

    return (
        <div className='container my-2'>
            <h2>Your Notes</h2>

            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={note.title} name='title' onChange={handlechange} required minLength={5} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="description" value={note.description} name='description' onChange={handlechange} required minLength={5} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control" id="text" value={note.tag} name='tag' onChange={handlechange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='container'>
                    {notes.length === 0 && <p className='mx-2'>No notes to display yet!</p>}
                </div>
                {notes.map(Note => {
                    return <NoteItem key={Note._id} updatenote={updatenote} note={Note} />
                })}
            </div>
        </div>
    )
}

export default Notes