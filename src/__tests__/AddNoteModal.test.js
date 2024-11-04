import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NoteProvider } from "../context/NoteContext";
import AddNoteModal from "../components/AddNoteModal";

describe("AddNoteModal", () => {
  test("create new note", () => {
    render(
      <NoteProvider>
        <AddNoteModal show={true} onClose={() => {}} />
      </NoteProvider>
    );

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Test Note" },
    });
    fireEvent.change(screen.getByLabelText(/content/i), {
      target: { value: "Test content of the note" },
    });

    fireEvent.click(screen.getByText(/save note/i));

    expect(screen.getByLabelText(/title/i).value).toBe("");
    expect(screen.getByLabelText(/content/i).value).toBe("");
  });
});
