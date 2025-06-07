import NoteContext from "./notesContext";
import { useState } from 'react';
import { API_URL } from '../../config';

const NoteState = (props) => {
    const host = API_URL;
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Helper function to validate token
    const validateToken = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No authentication token found');
        }
        return token;
    };

    // get all notes
    const getNotes = async () => {
        try {
            const token = validateToken();
            console.log('Fetching notes with token:', token);

            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                mode: 'cors'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            console.log('Received notes:', json);

            if (Array.isArray(json)) {
                setNotes(json);
            } else if (json.notes && Array.isArray(json.notes)) {
                setNotes(json.notes);
            } else {
                console.error('Invalid data format received:', json);
                setNotes([]);
            }
        } catch (error) {
            console.error("Error fetching notes:", error);
            setNotes([]);
            // Clear token if it's invalid
            if (error.message.includes('401')) {
                localStorage.removeItem('token');
            }
        }
    }

    // add a note
    const addNote = async (title, description, tag) => {
        try {
            const token = validateToken();
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Add note failed with status: ${response.status}`);
            }

            const note = await response.json();
            setNotes(notes.concat(note));
        } catch (error) {
            console.error("Error adding note:", error);
            throw error;
        }
    }

    // delete a note
    const deleteNote = async (id) => {
        try {
            const token = validateToken();
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                mode: 'cors'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Delete failed with status: ${response.status}`);
            }

            const json = await response.json();
            console.log('Delete response:', json);

            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
        } catch (error) {
            console.error("Error deleting note:", error);
            throw error;
        }
    }

    // edit a note
    const editNote = async (id, title, description, tag) => {
        try {
            const token = validateToken();
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Update failed with status: ${response.status}`);
            }

            await response.json();
            const newNotes = notes.map(note =>
                note._id === id ? { ...note, title, description, tag } : note
            );
            setNotes(newNotes);
        } catch (error) {
            console.error("Error updating note:", error);
            throw error;
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;