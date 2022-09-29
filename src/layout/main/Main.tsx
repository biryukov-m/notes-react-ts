import React from "react";
import Notes from "../../pages/notes/Notes";
import Summary from "../../pages/summary/Summary";
import ControlPanel from "../../pages/controlpanel/ControlPanel";
import Popup from "../../pages/popup/Popup";
import Table from "../../components/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";

const Main: React.FC = () => {
  const showPopup = useSelector(
    (state: RootState) => state.interface.showPopup
  );

  return (
    <main>
      {showPopup && <Popup />}
      <ControlPanel />
      <Table>
        <Notes />
      </Table>
      <Table>
        <Summary />
      </Table>
    </main>
  );
};
export default Main;
