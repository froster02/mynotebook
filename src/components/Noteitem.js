import React from 'react'

const Noteitem = ({ note }) => {
    if (!note) return null;

    return (
        <div className="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title || 'Untitled'}</h5>
                    <p class="card-text">{note.description || 'No descriptiLon'}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
