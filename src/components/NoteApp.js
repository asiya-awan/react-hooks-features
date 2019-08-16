import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducer/notes';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NotesContext from '../context/notes-context';


const NoteApp = () => {

    const [notes, dispatch] = useReducer(notesReducer, []);
       

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <>
            <NotesContext.Provider value = {{ notes, dispatch }}>
                <h1>Notes</h1>
                <NoteList />
                <NoteForm />
            </NotesContext.Provider>
           
        </>
    )
};

export { NoteApp as default};