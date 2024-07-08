// // import React, {useContext} from 'react'
// // import noteContext from "../context/notes/noteContext"
// // import NoteItem from './NoteItem';


// // const Notes = () => {
// //     const context = useContext(noteContext);
// //     const {notes, setNotes} = context;
// //     return (
// //         <div className="row my-3">
// //             <h2>You Notes</h2> 
// //             {notes.map((note)=>{
// //                 return <NoteItem note={note}/>  
// //             })}
// //             </div>
// //     )
// // }

// // export default Notes

// import React, { useContext } from 'react';
// import { NoteContext } from '../context/notes/noteContext';
// import NoteItem from './NoteItem';

// const Notes = () => {
//   const { notes } = useContext(NoteContext);

//   return (
//     <div className="row my-3">
//       <h2>Your Notes</h2>
//       {notes.map((note) => (
//         <NoteItem key={note.id} note={note} />
//       ))}
//     </div>
//   );
// };

// export default Notes;




import React from 'react';
import { useNotes } from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
  const { notes } = useNotes();

  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
