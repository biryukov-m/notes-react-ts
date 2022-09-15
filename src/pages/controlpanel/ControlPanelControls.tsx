import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
    <div className="top-controls">
      <div className="control add-note">
        <i onClick={handleAddNoteClick}>+</i>
        <span>Add new note</span>
      </div>
      <div className="control show-archive">
        <i onClick={handleToggleShow} className={icon}></i>
        <span>{buttonText}</span>
      </div>
    </div>
  );
};

export default ControlPanelControls;
