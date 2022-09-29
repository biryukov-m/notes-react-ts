import ControlPanelBreadCrumbs from "./ControlPanelBreadcrumbs";
import ControlPanelControls from "./ControlPanelControls";

const ControlPanel: React.FC = () => (
  <section className="control-panel flex flex-row items-center justify-between">
    <ControlPanelBreadCrumbs />
    <ControlPanelControls />
  </section>
);

export default ControlPanel;
