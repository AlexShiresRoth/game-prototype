import Controller from "./controller";
import Game from "./game";
import "./scene.css";

export default function Scene() {
  return (
    <div id="canvas-container">
      <Controller>
        <Game />
      </Controller>
    </div>
  );
}
