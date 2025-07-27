import React from "react";
import '../index.css'

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div
        className="card my-3"
        style={{
          width: "18rem",
          backgroundColor: "black",
          color: "white",
          boxShadow: "0px 0px 15px rgba(255,255,255,0.3",
          borderRadius:'1.5rem'
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="actions" style={{display:'flex',flexDirection:'row',gap:'1rem'}}>
            <i className="fa-solid fa-trash action-icon"></i>
            <i className="fa-solid fa-pen action-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
