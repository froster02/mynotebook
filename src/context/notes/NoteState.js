import NoteContext from "./notesContext";
import { useState } from 'react';

const NoteState = (props) => {

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
    const addNote = (title, description, tag) => {
        console.log("Adding a new note");
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
    const editNote = (id, title, description, tag) => {
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