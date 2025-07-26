import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

const NotesComponent = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="d-flex flex-column">
      <h1>Your Notes</h1>
      <div className="d-flex flex-row">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </div>
  );
};

export default NotesComponent;
