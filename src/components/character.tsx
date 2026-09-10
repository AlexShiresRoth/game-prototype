import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { Controls } from "./controller";

// TODO checkout camera world position
export default function Character() {
  const { camera } = useThree();
  const cameraRef = useRef<typeof camera>(camera);
  const forward = useKeyboardControls<keyof Controls>((state) => state.forward);
  const left = useKeyboardControls<keyof Controls>((state) => state.left);
  const right = useKeyboardControls<keyof Controls>((state) => state.right);
  const backward = useKeyboardControls<keyof Controls>(
    (state) => state.backward,
  );
  const jump = useKeyboardControls<keyof Controls>((state) => state.jump);

  useFrame((_, delta) => {
    const speed = 4;
    const camera = cameraRef.current;
    if (forward) {
      camera.position.z -= speed * delta;
    }
    if (left) {
      camera.position.x -= speed * delta;
    }
    if (right) {
      camera.position.x += speed * delta;
    }
    if (backward) {
      camera.position.z += speed * delta;
    }
    if (jump) {
      camera.position.y += speed * delta;
    }
    return null;
  });

  return (
    <mesh position={[0, 1, 0]} rotateOnAxis={["x", "y", "z"]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
