import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import type { Group } from "three";
import Asset from "./asset";
import Character from "./character";
import DebugLine from "./debug-line";
import Mesh from "./mesh";

export default function Game() {
  const interactableObjects = useRef<Group>(null);
  return (
    <Canvas>
      <Physics>
        <PointerLockControls enabled />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} color="orange" />
        <DebugLine />
        <Character interactableObjects={interactableObjects} />
        <group ref={interactableObjects}>
          <Mesh />
        </group>
        <Asset url="assets/environments/dungeon.glb" />
      </Physics>
    </Canvas>
  );
}
