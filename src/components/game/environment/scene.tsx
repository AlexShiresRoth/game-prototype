import InteractionController from "@/controllers/interaction";
import Controller from "@/controllers/keyboard";
import Game from "@/components/game";
import Hud from "@/components/game/ui/hud";
import "./scene.css";

export default function Scene() {
  return (
    <div id="canvas-container">
      <Controller>
        <InteractionController>
          <Game />
        </InteractionController>
      </Controller>
      <Hud />
    </div>
  );
}
