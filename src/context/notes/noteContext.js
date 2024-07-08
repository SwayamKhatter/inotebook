// import { createContext, useContext } from 'react';

// const NoteContext = createContext();

// const useNotes = () => {
//   const context = useContext(NoteContext);
//   if (context === undefined) {
//     throw new Error('useNotes must be used within a NoteProvider');
//   }
//   return context;
// };

// export { NoteContext, useNotes };


import { createContext } from "react";

const noteContext = createContext();

export default noteContext;