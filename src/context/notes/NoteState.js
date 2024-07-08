import NoteContext from "./noteContext";
import { useState } from "react";

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
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;