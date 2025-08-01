import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import "../index.css";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const [errors, setErrors] = useState({ title: "", description: "", tag: "" });

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", description: "", tag: "" };

    if (note.title.trim().length < 3) {
      newErrors.title = "The Title must be at least 3 characters long!";
      isValid = false;
    }
    if (note.description.trim().length < 5) {
      newErrors.description = "The Description must be at least 5 characters long!";
      isValid = false;
    }
    if (note.tag.trim().length < 3) {
      newErrors.tag = "The Tag must be at least 3 characters long!";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validate()) {
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "default" });
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const gradientWrapperStyle = {
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    padding: "2px",
    borderRadius: "5px",
  };

  const inputStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    outline: "none",
    boxShadow: "none",
    width: "100%",
    borderRadius: "5px",
  };

  return (
    <div className="d-flex flex-column vh-50 justify-content-center align-items-center form-div">
      <h1><strong>Add Your Note</strong></h1>
      <form className="container">
        {/* Title */}
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="title" className="form-label">Title</label>
          <div style={gradientWrapperStyle}>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              style={inputStyle}
            />
          </div>
          {errors.title && <div className="text-danger mt-1">{errors.title}</div>}
        </div>

        {/* Description */}
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="description" className="form-label">Description</label>
          <div style={gradientWrapperStyle}>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              style={{ ...inputStyle, resize: "none", height: "100px" }}
            />
          </div>
          {errors.description && (
            <div className="text-danger mt-1">{errors.description}</div>
          )}
        </div>

        {/* Tag */}
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="tag" className="form-label">Tag</label>
          <div style={gradientWrapperStyle}>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              style={inputStyle}
            />
          </div>
          {errors.tag && <div className="text-danger mt-1">{errors.tag}</div>}
        </div>

        {/* Submit Button */}
        <div className="container mb-3 text-center">
          <button
            type="submit"
            className="w-25 btn btn-primary addnote-btn"
            onClick={handleClick}
          >
            Add this Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
