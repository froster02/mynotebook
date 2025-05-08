import React from 'react'

const Noteitem = ({ note }) => {
    if (!note) return null;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title || 'Untitled'}</h5>
                        <p className="card-text">{note.description || 'No description'}</p>
                        <i className="far fa-trash-alt mx-2"></i>
                        <i className="far fa-edit mx-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
