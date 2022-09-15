import React from "react";
// Redux
import { useSelector } from "react-redux";
// Types
import { Note } from "../../redux/reducer";
import { RootState } from "../../redux/store";
// Components
import { NoteRow } from "./NotesNoteRow";

const Notes: React.FC = () => {
  const notes: Array<Note> = useSelector((state: RootState) => state.notes);

  const renderedNotes = notes.map((note) => {
    return <NoteRow note={note} key={note.id} />;
  });

  return (
    <>
      <thead>
        <tr>
          <td></td>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>{renderedNotes}</tbody>
    </>
  );
};

export default Notes;