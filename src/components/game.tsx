import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Character from "./character";
import Floor from "./floor";
import Wall from "./wall";

export default function Game() {
  return (
    <Canvas>
      <PointerLockControls enabled />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} color="white" />
      <Character />
      <Wall />
      <Floor />
    </Canvas>
  );
}
