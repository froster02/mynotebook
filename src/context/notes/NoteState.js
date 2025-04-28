import NoteContext from "./notesContext";
import { useState } from 'react';

const NoteState = (props) => {
    const s1 = {
        "name": "Arush",
        "class": "5th"
    };

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Larry",
                "class": "12th"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;