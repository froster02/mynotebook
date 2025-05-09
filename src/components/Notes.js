import React, { useContext } from 'react';
import noteContext from '../context/notes/notesContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes = [] } = context;
    return (
        <div className='row my-3'>
            <h1>Your Notes</h1>
            {
                notes.map((note) => {
                    return note && <Noteitem key={note._id} note={note} />
                })
            }
        </div>
    );
}

export default Notes;