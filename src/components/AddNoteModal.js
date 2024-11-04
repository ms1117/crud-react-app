import React, { useState } from "react";
import { useNotes } from "../context/NoteContext";

const AddNoteModal = ({ show, onClose }) => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const validateInput = () => {
    let isValid = true;
    if (!title) {
      setTitleError("Title cannot be empty");
      isValid = false;
    } else if (title.length > 50) {
      setTitleError("Title cannot be larger than 50 characters");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!content) {
      setContentError("Content cannot be empty");
      isValid = false;
    } else if (content.length > 200) {
      setContentError("Content cannot be larger than 200 characters");
      isValid = false;
    } else {
      setContentError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      addNote({
        title,
        content,
      });
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
    >
      <div className="modal-dialog" style={{ zIndex: 100 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a New Note</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} noValidate>
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
                />
                {titleError && <div className="text-danger">{titleError}</div>}
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
                />
                {contentError && (
                  <div className="text-danger">{contentError}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Save Note
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={{ zIndex: 50 }}
      ></div>
    </div>
  );
};

export default AddNoteModal;
