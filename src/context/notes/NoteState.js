import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6880a12319a85a8e92114c50",
      user: "687f909103d7f6cb00468eb6",
      title: "My interview",
      description:
        "My interview will be scheduled at 1:00PM IST on 26th July. I will have to prepare for it very thouroughly. I will crack an intern and earn a large amount of money",
      tag: "personal",
      timestamp: "2025-07-23T08:45:23.833Z",
      __v: 0,
    },
    {
      _id: "6881fb5d9e88ddbbaaf43cf5",
      user: "687f909103d7f6cb00468eb6",
      title: "Classes",
      description:
        "My classes are going to start form 28th of July. I'll have to manage classes as well as react and dsa. I can do it and I will crack a good internship.",
      tag: "career",
      timestamp: "2025-07-24T09:22:37.277Z",
      __v: 0,
    },
  ];

  const [notes,setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
