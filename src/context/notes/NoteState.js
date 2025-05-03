import NoteContext from "./notesContext";
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

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;