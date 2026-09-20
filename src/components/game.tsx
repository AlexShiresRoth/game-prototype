import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Asset from "./asset";
import Character from "./character";

export default function Game() {
  return (
    <Canvas>
      <Physics>
        <PointerLockControls enabled />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} color="orange" />
        <Character />
        <Asset url="assets/environments/dungeon.glb" />
      </Physics>
    </Canvas>
  );
}
