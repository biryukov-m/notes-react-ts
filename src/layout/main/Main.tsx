import React from "react";
// Components
import Notes from "../../pages/notes/Notes";
import Summary from "../../pages/summary/Summary";
import ControlPanel from "../../pages/controlpanel/ControlPanel";
import Popup from "../../pages/popup/Popup";
import Table from "../../components/Table";
// Redux
import { useSelector } from "react-redux";
// Types
import { RootState } from "../../redux/store";

const Main: React.FC = () => {
  const showPopup = useSelector(
    (state: RootState) => state.interface.showPopup
  );

  return (
    <main>
      {showPopup && <Popup />}
      <ControlPanel />
      <Table sectionClass="notes-list">
        <Notes />
      </Table>
      <Table sectionClass="summary">
        <Summary />
      </Table>
    </main>
  );
};
export default Main;
