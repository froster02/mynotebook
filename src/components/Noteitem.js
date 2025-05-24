import { useContext } from 'react';
import noteContext from '../context/notes/notesContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3" style={{ minHeight: '20px' }}>
                <div className="card-body d-flex flex-column">
                    <div className='d-flex justify-content-between align-items-start'>
                        <h5 className="card-title" style={{ marginBottom: '15px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {note.title || 'Untitled'}
                        </h5>
                        <div>
                            <i className="far fa-trash-alt mx-2" style={{ cursor: 'pointer', color: '#dc3545' }} onClick={() => { deleteNote(note._id) }}></i>
                            <i className="far fa-edit mx-2" style={{ cursor: 'pointer', color: '#0d6efd' }} onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text" style={{ flex: '1', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {note.description || 'No description'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
