import React from "react";
// Redux
import { useSelector } from "react-redux";
// Types
import { Note } from "../../redux/notesSlice";
import { RootState } from "../../redux/reducer";
// Components
import { NoteRow } from "./NotesNoteRow";

const Notes: React.FC = () => {
  const notes: Array<Note> = useSelector((state: RootState) => state.notes);
  const filter = useSelector((state: RootState) => state.interface.filter);

  let filteredNotes;
  switch (filter) {
    case "Active":
      filteredNotes = notes.filter((note) => !note.archived);
      break;
    case "Archived":
      filteredNotes = notes.filter((note) => note.archived);
      break;
    default:
      filteredNotes = notes;
  }

  const renderedNotes = filteredNotes.map((note) => {
    return <NoteRow note={note} key={note.id} />;
  });

  return (
    <>
      <thead>
        <tr className="bg-forest">
          <td className="pb-8"></td>
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
