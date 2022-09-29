import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteCreated, noteUpdated } from "../../redux/notesSlice";
import { getDate } from "../../utils/helpers";
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
    <div className="fixed top-0 left-0 h-full w-full bg-black/50 z-20">
      <div
        className="popup absolute top-1/2 left-1/2 z-20 max-w-screen-sm w-full 
      rounded justify-center -translate-x-1/2 -translate-y-1/2"
      >
        <div className="content w-11/12 bg-middle-green px-3 pt-5 pb-7">
          <header
            className="flex flex-row items-center justify-between pt-0 pb-2 px-6 
          border-b-hookers-green border-b-2 border-solid "
          >
            <p className="text-3xl font-medium">
              {note ? "Update a note" : "Add a new note"}
            </p>
            <i
              className="text-3xl cursor-pointer text-hookers-green hover:text-persian-orange"
              onClick={handleCloseIconClick}
            >
              X
            </i>
          </header>
          <form className="mt-4 mx-6" action="#">
            <div className="row title mb-5">
              <label className="block text-xl mb-2">Title</label>
              <input
                required
                type="text"
                onChange={handleTitleChange}
                defaultValue={title}
                className="w-full h-12 outline-none text-lg py-0 px-4 rounded 
                border-b-hookers-green border-b-2 border-solid focus:border-persian-orange"
              />
            </div>
            <div className="row category mb-5">
              <label className="block text-xl mb-2">Category</label>
              <select
                className="w-full h-12 outline-none text-lg py-0 px-4 rounded 
                border-b-hookers-green border-b-2 border-solid focus:border-persian-orange"
                defaultValue={category}
                onChange={handleCategoryChange}
              >
                <option value="task">Task</option>
                <option value="idea">Idea</option>
                <option value="random">Random thought</option>
              </select>
            </div>
            <div className="row description mb-5">
              <label className="block text-xl mb-2">Description</label>
              <textarea
                required
                onChange={handleTextChange}
                className="max-h-full h-40 overflow-y-auto w-full resize-none outline-none
                 text-lg py-2 px-4 rounded border-b-hookers-green border-b-2 border-solid
                  focus:border-persian-orange"
                defaultValue={text}
              ></textarea>
            </div>
            {note ? (
              <button
                className="w-full h-12 border-none outline-none cursor-pointer text-lg rounded 
                bg-hookers-green text-forest hover:bg-persian-orange hover:text-lavender-web"
                onClick={handleUpdateClick}
              >
                Update a Note
              </button>
            ) : (
              <button
                className="w-full h-12 border-none outline-none cursor-pointer text-lg rounded 
                bg-hookers-green text-forest hover:bg-persian-orange hover:text-lavender-web"
                onClick={handleAddClick}
              >
                Add Note
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
