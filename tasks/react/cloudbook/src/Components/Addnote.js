import React, { useContext, useState } from 'react'
import alertContext from '../Context/Alert/alertContext';
import noteContext from '../Context/Notes/noteContext'
import loadingContext from '../Context/LoadingBar/loaderContext';

export const Addnote = () => {

    const context = useContext(noteContext)
    const { addnote } = context;

    const alertcontext = useContext(alertContext);
    const { showAlert } = alertcontext;

    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        setProgress(20);
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setProgress(70)
        showAlert("Added successfully", "success")
        setProgress(80)
        setnote({ title: "", description: "", tag: "" })
        setProgress(100)
    }

    return (
        <div className='container my-3 '>
            <h2>Add a note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Title</label>
                    <input type="text" className="form-control" value={note.title} id="title" name='title' onChange={handlechange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" value={note.description} id="description" name='description' onChange={handlechange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" value={note.tag} id="text" name='tag' onChange={handlechange} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
