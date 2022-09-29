import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

const ControlPanelControls: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.interface.filter);

  const handleAddNoteClick = () => {
    dispatch({ type: "interface/togglePopupClicked" });
  };

  const handleToggleShow = () => {
    const payload = filter === "Active" ? "Archived" : "Active";
    dispatch({ type: "interface/filterChanged", payload });
  };

  let buttonText, icon;
  switch (filter) {
    case "Active":
      buttonText = "Show archived notes";
      icon = "fa-solid fa-box-archive";
      break;
    case "Archived":
      buttonText = "Show unarchived notes";
      icon = "fa-solid fa-note-sticky";
      break;
  }

  return (
    <div className="flex gap-2">
      <div className="flex justify-center items-center flex-col">
        <i
          className="flex justify-center items-center flex-col 
          font-normal h-7 w-7 rounded-full bg-hookers-green 
          text-forest not-italic cursor-pointer text-4xl 
          hover:text-lavender-web"
          onClick={handleAddNoteClick}
        >
          +
        </i>
        <span className="text-base tracking-tighter">Add new note</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <i
          className={`flex justify-center items-center flex-col 
          h-7 w-7 text-base rounded-full bg-hookers-green
          text-forest cursor-pointer ${icon} hover:text-lavender-web`}
          onClick={handleToggleShow}
        ></i>
        <span className="text-base tracking-tighter">{buttonText}</span>
      </div>
    </div>
  );
};

export default ControlPanelControls;
