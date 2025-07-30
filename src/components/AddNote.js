import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote } = context;

  const [note,setNote] = useState({title:"",description:"",tag:"default"})

  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }

  const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div className="d-flex flex-column vh-50 justify-content-center align-items-center form-div">
        <h2>Add Your Note</h2>
      <form className="container ">
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        {/* <div
          className="container mb-3 w-25 form-check"
          style={{ minWidth: "300px" }}
        > */}
          {/* <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={onChange}
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember Me😘
          </label> */}
        {/* </div> */}
        <div className="container mb-3 text-center">
          <button type="submit" className="w-25 btn btn-primary" onClick={handleClick}>
            Add this Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
