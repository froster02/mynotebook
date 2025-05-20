import NoteContext from "./notesContext";
import { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:3000"
    const notesInitial =
        [
            {
                "_id": "67e979265139f37fde095803",
                "user": "67cddc2866828567a72743f8",
                "title": "My Title",
                "description": "Morning! Hit the gym",
                "tag": "personal",
                "date": "2025-03-30T17:02:30.725Z",
                "createdAt": "2025-03-30T17:02:30.726Z",
                "updatedAt": "2025-03-30T17:02:30.726Z",
                "__v": 0
            },
            {
                "_id": "67e979275139f37fde095805",
                "user": "67cddc2866828567a72743f8",
                "title": "My Title",
                "description": "Morning! Hit the gym",
                "tag": "personal",
                "date": "2025-03-30T17:02:31.861Z",
                "createdAt": "2025-03-30T17:02:31.862Z",
                "updatedAt": "2025-03-30T17:02:31.862Z",
                "__v": 0
            }
        ];

    const [notes, setNotes] = useState(notesInitial);

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

        const note = {
            "_id": "67e979275139f37fde095806",
            "user": "67cddc2866828567a72743f9",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-03-30T17:02:31.861Z",
            "createdAt": "2025-03-30T17:02:31.862Z",
            "updatedAt": "2025-03-30T17:02:31.862Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // delete a note
    const deleteNote = (id) => {
        console.log("Deleting a note" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // edit a note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZGRjMjg2NjgyODU2N2E3Mjc0M2Y4In0sImlhdCI6MTc0MTU0NDQ4OH0.iah-A6NEy1qF--CJANRowrvjuymFFAOwLqSepS5Zf6Q"
            },
            body: JSON.stringify(title, description, tag)
        });

        const json = await response.json();

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;