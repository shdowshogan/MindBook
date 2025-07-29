import { useState,useCallback } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // get all notes
  const getNotes = useCallback(async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json);
  }, [host]);

  // Add a note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    const note = {
      _id: "69280a12319a85a8e92114c50",
      user: "687f909103d7f6cb00468eb6",
      title: title,
      description: description,
      tag: tag,
      timestamp: "2025-07-20T08:45:23.833Z",
      __v: 0,
    };
    setNotes([note, ...notes]);
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("deleting a note " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
