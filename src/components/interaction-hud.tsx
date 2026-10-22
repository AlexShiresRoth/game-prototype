import { Html } from "@react-three/drei";
import type { ActionType } from "../stores";

type Props = {
  actionType: ActionType;
};

const ActionsMap = {
  pickup: "Pick up",
  use: "Use",
  open: "Open",
  hold: "Hold",
} as const satisfies Record<ActionType, string>;

export default function InteractionHUD({ actionType }: Props) {
  return (
    <Html position={[0, 1, 0]}>
      <div className="interact-text-container">
        <h1>{`[E]`}</h1>
        <h1>{ActionsMap[actionType]}</h1>
      </div>
    </Html>
  );
}
