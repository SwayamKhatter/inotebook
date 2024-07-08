// import NoteContext from "./noteContext";
// import { useState, useContext, createContext } from "react";

// const NoteState = (props) => {
//     const notesInitial = [
//         {
//           "_id": "668b844589bdd2c5de741716",
//           "user": "668b7766b4501faef3f90ece",
//           "title": "Problem Solved",
//           "description": "DONE",
//           "tag": "problem",
//           "__v": 0
//         },
//         {
//           "_id": "668b845589bdd2c5de741718",
//           "user": "668b7766b4501faef3f90ece",
//           "title": "Backend",
//           "description": "DONE",
//           "tag": "General",
//           "__v": 0
//         }
//       ];

//     const [notes, setNotes] = useState(notesInitial);

//     return (
//         <NoteContext.Provider value={{notes, setNotes}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// };

// const useNotes = () => {
//   const context = useContext(NotesContext);
//   if (context === undefined) {
//     throw new Error('useNotes must be used within a NotesProvider');
//   }
//   return context;
// };

// export {NoteState, useNotes};


import React, { useState } from 'react';
import {NoteContext} from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "668b844589bdd2c5de741716",
          "user": "668b7766b4501faef3f90ece",
          "title": "Problem Solved",
          "description": "DONE",
          "tag": "problem",
          "__v": 0
        },
        {
          "_id": "668b845589bdd2c5de741718",
          "user": "668b7766b4501faef3f90ece",
          "title": "Backend",
          "description": "DONE",
          "tag": "General",
          "__v": 0
        }
      ];

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;
