import React, { useContext } from 'react';
import noteContext from '../context/notes/notesContext';
/**
 * Notes component that displays a list of notes.
 * It uses the noteContext to access the notes data and setNotes function.
 * 
 * @component
 * @returns {JSX.Element} A list of notes rendered in a container
 * 
 * @description
 * This component maps through the notes array from the context and displays each note's title.
 * It is designed to be used within a larger application that manages notes.
 */
/**
 * Notes Component - Displays a list of notes
 * @component
 * @returns {JSX.Element} Notes component that renders a container with a heading and maps through notes to display their titles
 * @example
 * return (
 *   <Notes />
 * )
 */
const Notes = () => {
    const context = useContext(noteContext);
    const { notes = [], setNotes } = context; // 
    return (
        <div className='container my-3'>
            <h1>Your Notes</h1>
            {
                notes.map((note) => {
                    return note.title;
                })
            }
        </div>
    );
}

export default Notes;