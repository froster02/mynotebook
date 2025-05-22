import NoteContext from "./notesContext";
import { useState } from 'react';
import { API_URL } from '../../config';

const NoteState = (props) => {
    const host = API_URL;
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // get all notes
    const getNotes = async () => {
        try {
            console.log('Fetching notes from:', `${host}/api/notes/fetchallnotes`);
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZGRjMjg2NjgyODU2N2E3Mjc0M2Y4In0sImlhdCI6MTc0MTU0NDQ4OH0.iah-A6NEy1qF--CJANRowrvjuymFFAOwLqSepS5Zf6Q"
                },
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
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
        }
    }

    // add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZGRjMjg2NjgyODU2N2E3Mjc0M2Y4In0sImlhdCI6MTc0MTU0NDQ4OH0.iah-A6NEy1qF--CJANRowrvjuymFFAOwLqSepS5Zf6Q"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    }

    const fetchWithCORS = async (url, options) => {
        try {
            console.log('Fetching from:', url); // Debug log
            const response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    'Content-Type': 'application/json',
                    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZGRjMjg2NjgyODU2N2E3Mjc0M2Y4In0sImlhdCI6MTc0MTU0NDQ4OH0.iah-A6NEy1qF--CJANRowrvjuymFFAOwLqSepS5Zf6Q"
                },
                mode: 'cors',
                credentials: 'include' // Add this for cookies if needed
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response data:', data); // Debug log
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    };

    // delete a note
    const deleteNote = async (id) => {
        try {
            await fetchWithCORS(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE'
            });
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
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZGRjMjg2NjgyODU2N2E3Mjc0M2Y4In0sImlhdCI6MTc0MTU0NDQ4OH0.iah-A6NEy1qF--CJANRowrvjuymFFAOwLqSepS5Zf6Q"
                },
                body: JSON.stringify({ title, description, tag })
            });
            await response.json();

            const newNotes = notes.map(note =>
                note._id === id ? { ...note, title, description, tag } : note
            );
            setNotes(newNotes);
        } catch (error) {
            console.error("Error updating note:", error);
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;