import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";
import { useInteractableState } from "@/stores";
import type { Controls } from "./keyboard";

type Props = {
  children: React.ReactNode;
};
export default function InteractionController({ children }: Props) {
  const { interactableObject } = useInteractableState();

  const interact = useKeyboardControls<keyof Controls>((state) => {
    return state.interact;
  });

  useEffect(() => {
    if (interact && interactableObject) {
      console.log("interact", interactableObject);
    }
  }, [interact, interactableObject]);

  return children;
}
