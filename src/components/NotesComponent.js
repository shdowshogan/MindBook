import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const NotesComponent = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
    <AddNote/>
    <div className="container d-flex flex-column align-items-center">
      <h1>Your Notes</h1>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
    </>
  );
};

export default NotesComponent;
