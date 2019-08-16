import React, { useEffect, useContext} from 'react';
import NotesContext from '../context/notes-context';

const Note = ({ note}) => {
    const { dispatch } = useContext(NotesContext);

    // const removeNote1 = (title) => {
    //     dispatch({
    //         type: 'REMOVE_NOTE',
    //         title
    //     });
    // }


    useEffect(() => {
        console.log('Setting up effect!')

        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            {/* <button onClick={() => removeNote1(note.title)}>x</button> */}
            <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
        </div>
    )
}

export { Note as default};