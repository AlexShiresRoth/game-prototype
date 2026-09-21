import { useInteractableState } from "../stores";
import "./hud.css";

export default function Hud() {
  const { name } = useInteractableState();
  return (
    <div className="hud-container">
      <div></div>
    </div>
  );
}
