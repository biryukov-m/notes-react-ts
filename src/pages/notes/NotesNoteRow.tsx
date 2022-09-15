import { useDispatch } from "react-redux";
import { Note } from "../../redux/reducer";

type Props = {
  note: Note;
};

export const NoteRow: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  // Action
  const editNoteClicked = () => {
    dispatch({
      type: "interface/editNoteClicked",
      payload: note.id,
    });
  };

  return (
    <tr
      className={note.archived ? "note hide" : "note"}
      id={`"note-${note.id}"`}
    >
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
          <span className="icon archivate"></span>
          <span className="icon delete">
            <i className="fa-solid fa-trash"></i>
          </span>
        </div>
      </td>
    </tr>
  );
};
