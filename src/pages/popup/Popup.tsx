import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { noteCreated, noteUpdated } from "../../redux/notesSlice";
// Helpers
import { getDate } from "../../utils/helpers";
// Types
import { RootState } from "../../redux/reducer";
import { Note } from "../../redux/notesSlice";

const Popup: React.FC = () => {
  const dispatch = useDispatch();

  const updateNoteId = useSelector(
    (state: RootState) => state.interface.updateNoteId
  );

  const note: Note = useSelector(
    (state: RootState) =>
      state.notes.filter((note: { id: Number }) => note.id === updateNoteId)[0]
  );

  const [title, setTitle] = useState(note ? note.title : "");
  const [category, setCategory] = useState(
    note ? note.category.selector : "task"
  );
  const [text, setText] = useState(note ? note.text : "");

  // Click and onchange handlers
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(event.target.value);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  const handleAddClick = () => {
    if (title && text) {
      const date = getDate();
      dispatch(noteCreated({ title, category, text, date }));
      dispatch({
        type: "interface/togglePopupClicked",
      });
    }
  };

  const handleUpdateClick = () => {
    const id = updateNoteId;
    if (title && text) {
      dispatch(noteUpdated({ id, title, text, category }));
      dispatch({
        type: "interface/togglePopupClicked",
      });
    }
  };

  const handleCloseIconClick = () => {
    dispatch({ type: "interface/togglePopupClicked" });
  };

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="content">
          <header>
            <p>{note ? "Update a note" : "Add a new note"}</p>
            <i onClick={handleCloseIconClick}>X</i>
          </header>
          <form action="#">
            <div className="row title">
              <label>Title</label>
              <input
                required
                type="text"
                onChange={handleTitleChange}
                defaultValue={title}
              />
            </div>
            <div className="row category">
              <label>Category</label>
              <select defaultValue={category} onChange={handleCategoryChange}>
                <option value="task">Task</option>
                <option value="idea">Idea</option>
                <option value="random">Random thought</option>
              </select>
            </div>
            <div className="row description">
              <label className="">Description</label>
              <textarea
                required
                onChange={handleTextChange}
                className="details"
                defaultValue={text}
              ></textarea>
            </div>
            {note ? (
              <button onClick={handleUpdateClick}>Update a Note</button>
            ) : (
              <button onClick={handleAddClick}>Add Note</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
