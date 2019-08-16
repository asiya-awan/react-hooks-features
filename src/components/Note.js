import React, { useEffect, useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note}) => {
    const { dispatch } = useContext(NotesContext);
    const position = useMousePosition();
    console.log(position)

    useEffect(() => {
        console.log('Setting up effect!')

        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])

    return (
        <>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p> {position.x}, {position.y}</p>
            <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
        </>
    )
}

export { Note as default};