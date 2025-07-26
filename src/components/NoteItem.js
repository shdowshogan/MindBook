import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card mx-5 " style={{width: '18rem',backgroundColor:'black',color:'white',boxShadow:'0px 0px 40px rgba(255,255,255,0.3'}}>
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
