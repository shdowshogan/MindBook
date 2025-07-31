import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote } = context;

  const [note,setNote] = useState({title:"",description:"",tag:"default"})
  const [errors,setErrors] = useState({title:"",description:""})

  const validate = ()=>{
    let isValid = true;
    const newErrors = {title:"",description:""}

    if(note.title.trim().length < 3){
        newErrors.title = "The Title must be atleast 3 characters long!"
        isValid = false;
    }
    if(note.description.trim().length < 5){
        newErrors.description = "The Description must be atleast 5 characters long!"
        isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  const handleClick = (e)=>{
    e.preventDefault();
    if(validate()){
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:"default"});
    }
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
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
           {errors.title && <div className="text-danger mt-1">{errors.title}</div>}
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
            value={note.description}
            onChange={onChange}
          />
          {errors.description && <div className="text-danger mt-1">{errors.description}</div>}
        </div>
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
