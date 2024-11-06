import React, { useState } from "react";
import { useNotes } from "../context/NoteContext";
import { Link } from "react-router-dom";
import AddNoteModal from "./AddNoteModal";

const Home = () => {
  const { notes } = useNotes();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h1>Notes</h1>
      <ul className="list-group">
        {notes.map((note) => (
          <li key={note.id} className="list-group-item">
            <Link to={`/note/${note.id}`}>
              {note.title} - {new Date(note.createdTime).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary mt-3"
        onClick={() => setShowModal(true)}
      >
        Add Note
      </button>
      <AddNoteModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
