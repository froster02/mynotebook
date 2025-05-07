import NoteContext from "./notesContext";
import { useState } from 'react';
/**
 * NoteState component that provides a note context to its children using React Context API
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the note context
 * @returns {JSX.Element} NoteContext.Provider component wrapping children
 * 
 * @description
 * This component uses React's Context API to share state and update methods across components.
 * The context provides:
 * - state: An object containing name and class data
 * - update: A method to modify the state after a delay
 *
 * @example
 * <NoteState>
 *   <ChildComponent />
 * </NoteState>
 */
/**
 * State management component for notes using Context API
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the note context
 * @returns {JSX.Element} NoteContext.Provider component wrapping children
 */
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

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;