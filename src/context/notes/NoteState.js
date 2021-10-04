import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  //****************** Get  all notes function******************
  const getNotes = async () => {
    // API Call to Get Data in database
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGM1MTA4N2U5M2MwM2Q1YzNjYTVmIn0sImlhdCI6MTYzMjQ4NzI1Mn0.UyMevZETvSJ4wlBaMQoKgMyg0e__Q5fMyTfxyNO_WVI",
      },
    });
    // console.log(await response.json());
    let json = await response.json();
    setNotes(json);
  };

  //****************** Add a note function******************
  const addNote = async (title, description, tag) => {
    // API Call to set Data in database
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGM1MTA4N2U5M2MwM2Q1YzNjYTVmIn0sImlhdCI6MTYzMjQ4NzI1Mn0.UyMevZETvSJ4wlBaMQoKgMyg0e__Q5fMyTfxyNO_WVI",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const json = await response.json();
    console.log(json);
    getNotes();
    //setNotes(notes.concat(note)); // insted of using arr.push we used arr.contact so it crete a new array
  };

  //****************** edit a note function ******************
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGM1MTA4N2U5M2MwM2Q1YzNjYTVmIn0sImlhdCI6MTYzMjQ4NzI1Mn0.UyMevZETvSJ4wlBaMQoKgMyg0e__Q5fMyTfxyNO_WVI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    // Logic to edit a client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //****************** delete a note function******************
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGM1MTA4N2U5M2MwM2Q1YzNjYTVmIn0sImlhdCI6MTYzMjQ4NzI1Mn0.UyMevZETvSJ4wlBaMQoKgMyg0e__Q5fMyTfxyNO_WVI",
      },
    });
    const json = await response.json();
    console.log(json);
    // using arr.filter method to filter out the arr objects
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    // API Call to Delete Note From DB
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
