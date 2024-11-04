import React, { useState, useEffect } from "react";
import { useNotes } from "../context/NoteContext";
import { useParams, useNavigate } from "react-router-dom";

const NoteDetails = () => {
  const { notes, editNote, deleteNote } = useNotes();
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id.toString() === id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    editNote({
      ...note,
      title,
      content,
    });
    navigate("/");
  };

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  if (!note) return <div>Note not found</div>;

  return (
    <div className="container">
      <h1>Editing Note</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={200}
        ></textarea>
      </div>
      <button className="btn btn-success" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteDetails;
