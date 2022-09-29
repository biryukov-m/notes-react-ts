import { useDispatch } from "react-redux";
import { Note } from "../../redux/notesSlice";

type Props = {
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
    <tr
      className="bg-middle-green hover:bg-persian-orange"
      id={`"note-${note.id}"`}
    >
      <td className="flex flex-col items-center justify-center px-1 py-1.5">
        <span
          className="flex flex-col items-center justify-center bg-hookers-green 
        text-forest text-lg rounded-full w-8 h-8"
        >
          <i className={note.category.icon}></i>
        </span>
      </td>
      <th className="clip px-1 py-1.5 pl-0 max-w-xs">{note.title}</th>
      <td className="text-sm px-1 py-1.5">{note.date}</td>
      <td className="text-sm px-1 py-1.5">{note.category.name}</td>
      <td className="max-w-xs clip px-1 py-1.5">{note.text}</td>
      <td className="text-sm clip px-1 py-1.5">{note.dates}</td>
      <td className="px-1 py-1.5">
        <div className="flex justify-center gap-3">
          <span
            onClick={editNoteClicked}
            className="flex flex-col items-center justify-center bg-hookers-green 
            text-forest text-xl rounded-full w-8 h-8"
          >
            <i className="cursor-pointer hover:text-lavender-web fa-solid fa-pen-to-square"></i>
          </span>
          <span
            onClick={noteToggleClicked}
            className="flex flex-col items-center justify-center bg-hookers-green 
            text-forest text-xl rounded-full w-8 h-8"
          >
            {note.archived ? (
              <i className="cursor-pointer hover:text-lavender-web fa-solid fa-file-arrow-up"></i>
            ) : (
              <i className="cursor-pointer hover:text-lavender-web fa-solid fa-file-arrow-down"></i>
            )}
          </span>
          <span
            onClick={deleteNoteClicked}
            className="flex flex-col items-center justify-center bg-hookers-green 
            text-forest text-xl rounded-full w-8 h-8"
          >
            <i className="cursor-pointer hover:text-lavender-web fa-solid fa-trash"></i>
          </span>
        </div>
      </td>
    </tr>
  );
};
