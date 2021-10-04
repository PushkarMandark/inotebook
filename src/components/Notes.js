import React, { useState, useContext, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(NoteContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  const updateNote = (note) => {
    ref.current.click();
  };
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  ret;
  return (
    <>
      <AddNote />

      <Button ref={ref} variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="etitle" className="form-label">
                Note Title
              </label>
              <input
                type="text"
                className="form-control"
                id="etitle"
                name="etitle"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="edescription"
                name="edescription"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                tag
              </label>
              <input
                type="text"
                className="form-control"
                id="etag"
                name="etag"
                onChange={onChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row my-5">
        <h1>Your Notes</h1>
        <hr />
        {notes.map((val) => {
          return <Noteitem data={val} updateNote={updateNote} key={val._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
