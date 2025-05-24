import { useContext } from 'react';
import noteContext from '../context/notes/notesContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title || 'Untitled'}</h5>
                        <p className="card-text">{note.description || 'No description'}</p>
                        <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                        <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Noteitem
