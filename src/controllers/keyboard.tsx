import {
  KeyboardControls,
  type KeyboardControlsEntry,
} from "@react-three/drei";
import { useMemo } from "react";

const Controls = {
  forward: "forward",
  backward: "backward",
  left: "left",
  right: "right",
  jump: "jump",
  interact: "interact",
} as const;

export type Controls = typeof Controls;

export default function Controller({
  children,
}: {
  children: React.ReactNode;
}) {
  const map = useMemo<KeyboardControlsEntry<keyof typeof Controls>[]>(() => {
    return [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space", "KeyJ"] },
      { name: Controls.interact, keys: ["KeyE"] },
    ];
  }, []);

  return <KeyboardControls map={map}>{children}</KeyboardControls>;
}
