import React, { useContext } from 'react'
import alertContext from '../Context/Alert/alertContext';
import noteContext from '../Context/Notes/noteContext'
import loadingContext from '../Context/LoadingBar/loaderContext';

function NoteItem({ note, updatenote }) {

    const context = useContext(noteContext);
    const alertcontext = useContext(alertContext);

    const { deletenote } = context;
    const { showAlert } = alertcontext;

    const loadingcontext = useContext(loadingContext);
    const { setProgress } = loadingcontext

    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-2" onClick={() => { deletenote(note._id); setProgress(30); showAlert("Deleted Successfully", "success"); setProgress(100) }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { setProgress(10); updatenote(note) }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem