import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

const ControlPanelBreadCrumbs: React.FC = () => {
  const filter = useSelector((state: RootState) => state.interface.filter);
  let header;
  switch (filter) {
    case "Active":
      header = "Active notes";
      break;
    case "Archived":
      header = "Archived notes";
      break;
    default:
      header = "Notes";
  }

  return (
    <header>
      <h2>{header}</h2>
    </header>
  );
};

export default ControlPanelBreadCrumbs;
