import React, { useContext } from "react";
import "../index.css";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className="d-flex justify-content-center flex-row mx-3 card-hover">
      <div
        className="card my-3"
        style={{
          width: "18rem",
          backgroundColor: "black",
          color: "white",
          boxShadow:
            "0 0 15px rgba(0, 198, 255, 0.5), 0 0 30px rgba(0, 114, 255, 0.5)",
          borderRadius: "1.5rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <span className="badge tag-badge my-2">{note.tag}</span>
          <p className="card-text">{note.description}</p>
          <div
            className="actions"
            style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
          >
            <i
              className="fa-solid fa-trash action-icon"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen action-icon"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
