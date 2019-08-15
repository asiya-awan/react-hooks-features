import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [notes, setNotes] = useState(notesData ||[]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addNote = (e) => {
        e.preventDefault();

        setNotes([
            ...notes,
            { title, description } 
        ])
 
        setTitle('')
        setDescription('')
    }

    const removeNote = (title) => {
        
        setNotes(notes.filter( (note) => note.title !== title))
    }

    useEffect(() => {
        const json = JSON.stringify(notes);
        localStorage.setItem('notes',json )
    });

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note, index) => (
                <div key={index}>
                    <h3>{note.title}</h3>   
                    <p>{note.description}</p>
                    <button onClick={(e) => removeNote(note.title)} >x</button>
                </div>
            ))
            }
            <hr/>
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange ={(e) => setTitle(e.target.value)}/>
                <textarea value={description} onChange ={(e) => setDescription(e.target.value)}/>
                <button>Save</button>
            </form>
        </div>
    )
};

ReactDOM.render(<NoteApp />, document.getElementById('root'));
serviceWorker.unregister();
