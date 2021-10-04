import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes } = context;

  return (
    <div className="row my-5">
      <h1>Your Notes</h1>
      <hr />
      {notes.map((val) => {
        console.log(val);
        return <Noteitem data={val} key={val._id} />;
      })}
    </div>
  );
};

export default Notes;
