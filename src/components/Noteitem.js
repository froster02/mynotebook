import { useContext } from 'react';
import noteContext from '../context/notes/notesContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { note } = props;
    const { deleteNote } = context;

    const handleDelete = async () => {
        try {
            await deleteNote(note._id);
        } catch (error) {
            console.error('Error deleting note:', error);
            // TODO: Show error to user via alert/toast
        }
    };

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title || 'Untitled'}</h5>
                        <p className="card-text">{note.description || 'No description'}</p>
                        <i className="far fa-trash-alt mx-2" onClick={handleDelete}></i>
                        <i className="far fa-edit mx-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
