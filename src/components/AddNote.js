// import React from 'react'
// import { useState } from 'react'
// import { useContext } from 'react'
// import {NoteContext} from '../context/notes/noteContext'

// const AddNote = () => {
//     const context=useContext(NoteContext);
//     const {addNote} = context;

    
//     const [note, setNote] = useState({title: "", description: "", tag: ""})
//     const handleClick=(e)=>{
//         e.preventDefault();
//         addNote(note.title, note.description, note.tag);
//     }

//     const onChange=(e)=>{
//         setNote({...note, [e.target.name]: e.target.value})
//     }
//     return (
//         <div className='container my-3'>
//             <h2>Add a Note</h2>
//             <form>
//                 <div className="mb-3">
//                     <label htmlfor="title" className="form-label">Title</label>
//                     <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlfor="description" className="form-label">Description</label>
//                     <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                     <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddNote

import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote