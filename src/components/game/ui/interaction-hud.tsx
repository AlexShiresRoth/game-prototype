import type { ActionType } from "@/types/interaction";
import { Html } from "@react-three/drei";

type Props = {
  actionType: ActionType;
  objectPosition: [number, number, number];
};

const ActionsMap = {
  pickup: "Pick up",
  use: "Use",
  open: "Open",
  hold: "Hold",
  activate: "Activate",
  drag: "Drag",
} as const satisfies Record<ActionType, string>;

export default function InteractionHUD({ actionType, objectPosition }: Props) {
  return (
    <Html position={objectPosition} center>
      <div className="interact-text-container">
        <h1>{`[E]`}</h1>
        <h1>{ActionsMap[actionType]}</h1>
      </div>
    </Html>
  );
}
