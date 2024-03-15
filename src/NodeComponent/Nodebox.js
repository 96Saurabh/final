import React from "react";
import Note from "../Note/Note";
import './Nodebox.css'
function NotePad(props) {
  return (

    
    <div className="note-container">
      <h2>saurabh</h2>
      {/* <div className="note-container_notes">
        {props.notes.map((item, id) => (
          <Note key={id} note={item} />
        ))}
      </div> */}
    </div>
  );
}

export default NotePad;
