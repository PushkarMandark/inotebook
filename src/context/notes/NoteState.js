import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "614ecb789754085aa60d4714",
      user: "614dc51087e93c03d5c3ca5f",
      title: "433",
      description: "my descrition",
      tag: "my tag",
      date: "2021-09-25T07:10:48.756Z",
      __v: 0,
    },
    {
      _id: "614ecb8a9754085aa60d4716",
      user: "614dc51087e93c03d5c3ca5f",
      title: "this is my title",
      description: "my descrition",
      tag: "my tag",
      date: "2021-09-25T07:11:06.687Z",
      __v: 0,
    },
    {
      _id: "615037f0d12728a41f180d7d",
      user: "614dc51087e93c03d5c3ca5f",
      title: "Once uppon a time ",
      description: "this is story of a lion and fox",
      tag: "my tag",
      date: "2021-09-26T09:05:52.671Z",
      __v: 0,
    },
    {
      _id: "61519ad2bb5cd05b5e85408f",
      user: "614dc51087e93c03d5c3ca5f",
      title: "Once uppon a time ",
      description: "this is story of a lion and fox",
      tag: "my tag",
      date: "2021-09-27T10:20:02.268Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
