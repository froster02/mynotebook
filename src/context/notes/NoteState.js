import NoteContext from "./notesContext";

const NoteState = (props) => {
    const state = {
        "name": "Arush",
        "class": "10th"
    };

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;