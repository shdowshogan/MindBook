import { useState, useCallback } from "react";
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }, [host]);

  // Add a note
  const addNote = async (title, description, tag, id) => {
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
    const json = await response.json();
    console.log(json);

    setNotes([json,...notes]);
  };

  // Delete a note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      }
    });
    const json = response.json();
    console.log(json);
    
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
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3ZjkwOTEwM2Q3ZjZjYjAwNDY4ZWI2In0sImlhdCI6MTc1MzI0NDg5OH0._eCCcRurSI2w6ckUPmWAofQDcuw2oyV0L4DmBD6gc5g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
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
