import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/notesContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(() => {
        a.update()
    }, [a])
    return (
        <div>
            This is About {a.state.name} and he is in {a.state.class}
        </div>
    )
}

export default About