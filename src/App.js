import React, { useState } from "react";
import Side from './Side/Side'
import './App.css';
import Notebox from './NodeComponent/Nodebox'
function App() {

  const [notes, setNotes] = useState([
    {
      text: "saunrabh nirmakr",
      time: "12:25PM",
      color: "pink",
    },
  ]);

  return (
    <div className="App">
     <Notebox notes={notes}/>
     <Side />
    </div>
  );
}

export default App;
