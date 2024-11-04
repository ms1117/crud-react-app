import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const useNotes = () => useContext(NoteContext);

export const NoteProvider = ({ children, initialState }) => {
  const [notes, setNotes] = useState(initialState || []);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now(), createdTime: new Date() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};
