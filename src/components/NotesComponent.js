import noteContext from "../context/notes/noteContext";
import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const NotesComponent = () => {
  const context = useContext(noteContext);
  const { notes, getNotes} = context;

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <AddNote />
      <div className="container d-flex flex-column align-items-center">
        <h1>Your Notes</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NotesComponent;
