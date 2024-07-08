import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3"> 
            <div class="card my-3"> 
                <div class ="card-body">
                <h5 class ="card-title">{note.title}</h5>
                <p class ="card-text">{note.description}</p> 
                <i class="fa-solid fa-trash-can mx-2" onClick={() => {props.deleteNote(note._id)}}></i>
                <i class="fa-solid fa-pen-to-square mx-2" onClick={() => {props.updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem