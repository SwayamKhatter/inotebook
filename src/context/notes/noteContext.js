// // import { createContext } from "react";

// // const noteContext = createContext();    

// // export default noteContext;

// import React, { createContext, useState } from 'react';

// const NoteContext = createContext();

// const NoteProvider = ({ children }) => {

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
//   const [notes, setNotes] = useState(notesInitial);

//   return (
//     <NoteContext.Provider value={{ notes, setNotes }}>
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export { NoteContext, NoteProvider };


import { createContext, useContext } from 'react';

const NoteContext = createContext();

const useNotes = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }
  return context;
};

export { NoteContext, useNotes };
