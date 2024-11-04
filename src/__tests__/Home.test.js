import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { NoteProvider } from "../context/NoteContext";
import Home from "../components/Home";
import NoteDetails from "../components/NoteDetails";

describe("Home Component", () => {
  test("navigate to note details and find delete button", () => {
    const initialState = [
      {
        id: "1",
        title: "Existing Note",
        content: "Existing content",
        createdTime: new Date(),
      },
    ];

    render(
      <MemoryRouter initialEntries={["/note/1"]}>
        <NoteProvider initialState={initialState}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:id" element={<NoteDetails />} />
          </Routes>
        </NoteProvider>
      </MemoryRouter>
    );

    const existingElement = screen.getByText("Existing content");

    expect(existingElement).toBeInTheDocument();

    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(existingElement).not.toBeInTheDocument();
  });
});
