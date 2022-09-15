import React from "react";
import { useDispatch } from "react-redux";

const ControlPanelControls: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddNoteClick = () => {
    dispatch({ type: "interface/togglePopupClicked" });
  };

  return (
    <div className="top-controls">
      <div className="control add-note">
        <i onClick={handleAddNoteClick}>+</i>
        <span>Add new note</span>
      </div>
      <div className="control show-archive">
        varICON
        <span>VARarchiveBtnText</span>
      </div>
    </div>
  );
};

export default ControlPanelControls;
