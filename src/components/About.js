import React, { useContext } from 'react'
import NoteContext from '../context/notes/notesContext'

const About = () => {
    const a = useContext(NoteContext)
    console.log(a)
    return (
        <div>
            This is About {a.name} and he is in {a.class}
        </div>
    )
}

export default About