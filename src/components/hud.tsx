import { useInteractableState } from "../stores";
import "./hud.module.css";

export default function Hud() {
  const { name } = useInteractableState();

  return (
    <div className="hud-container">
      <div></div>
    </div>
  );
}
