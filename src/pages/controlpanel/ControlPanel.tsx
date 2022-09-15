import ControlPanelBreadCrumbs from "./ControlPanelBreadcrumbs";
import ControlPanelControls from "./ControlPanelControls";

const ControlPanel: React.FC = () => (
  <section className="control-panel">
    <ControlPanelBreadCrumbs />
    <ControlPanelControls />
  </section>
);

export default ControlPanel;
