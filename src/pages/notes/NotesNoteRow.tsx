import { useDispatch } from "react-redux";
import { Note } from "../../redux/notesSlice";

export type Props = {
  note: Note;
};

export const NoteRow: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  // Handlers
  const editNoteClicked = () => {
    dispatch({
      type: "interface/editNoteClicked",
      payload: note.id,
    });
  };

  const deleteNoteClicked = () => {
    dispatch({ type: "notes/noteDeleted", payload: note.id });
  };

  const noteToggleClicked = () => {
    dispatch({ type: "notes/noteToggled", payload: note.id });
  };

  return (
    <tr className="note" id={`"note-${note.id}"`}>
      <td className="icon-cell">
        <span className={`icon ${note.category.selector}`}>
          <i className={note.category.icon}></i>
        </span>
      </td>
      <th className="name clip">{note.title}</th>
      <td className="created">{note.date}</td>
      <td className="category">{note.category.name}</td>
      <td className="content clip">{note.text}</td>
      <td className="dates clip">{note.dates}</td>
      <td className="controls">
        <div className="wrapper">
          <span onClick={editNoteClicked} className="icon edit">
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
          <span onClick={noteToggleClicked} className="icon archivate">
            {note.archived ? (
              <i className="fa-solid fa-file-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-file-arrow-down"></i>
            )}
          </span>
          <span onClick={deleteNoteClicked} className="icon delete">
            <i className="fa-solid fa-trash"></i>
          </span>
        </div>
      </td>
    </tr>
  );
};
