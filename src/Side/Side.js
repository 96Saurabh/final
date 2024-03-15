import React from "react";
import "./Side.css";
// import Note from "../Note/Note"
import NotePad from '../NodeComponent/Nodebox'
function Side() {
// props ,updateText ,formatDate
  return (
    <div>
      <section className="note_back">
        <div className="note">
          <textarea
            className="note_text"
            placeholder="Enter your text here..........."
          />
          <div className="note_footer">
            <div className="send" onClick={()=>NotePad()}>
              <img src="send.png" alt="send" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Side;
