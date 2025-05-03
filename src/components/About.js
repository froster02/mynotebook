import React, { useContext } from 'react'
import NoteContext from '../context/notes/notesContext'

/**
 * About component that displays information about a user
 * @component
 * @uses {React.useContext} - Hook to access NoteContext
 * @uses {React.useEffect} - Hook to handle side effects
 * @uses {NoteContext} - React Context API provider that supplies user data
 * @description Uses React's Context API to access and display user information from a shared state
 * @returns {JSX.Element} A div containing user information from context
 */

const About = () => {
    const a = useContext(NoteContext)
    return (
        <div>
            This is About page
        </div>
    )
}

export default About