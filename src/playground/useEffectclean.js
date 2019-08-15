import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    
   
    const [notes, setNotes] = useState([]);
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
        console.log('useEffect of loading data')
        const notesData =  JSON.parse(localStorage.getItem('notes'));
        if(notesData){
            setNotes(notesData)
        }      
      }, []);

    useEffect(() => {
        console.log('useEffect of setting notes on every update')
        const json = JSON.stringify(notes);
        localStorage.setItem('notes',json )
    }, [notes]);

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note, index) => (
                    <Note note={note} key={index} removeNote= {removeNote} />
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

const Note = ({note, removeNote}) => {
    useEffect(() => {
        console.log('Note: on every note');

        return () => {
            console.log('Note: Cleaning up effect')
        }
    }, [])
    return (
        <div>
            <h3>{note.title}</h3>   
            <p>{note.description}</p>
            <button onClick={(e) => removeNote(note.title)} >x</button>
        </div>
    );
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));


serviceWorker.unregister();
