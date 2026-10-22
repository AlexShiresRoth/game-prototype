import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import type { Group } from "three";
import DebugLine from "@/components/game/debug/debug-line";
import Asset from "@/components/game/environment/asset";
import Character from "@/components/game/player/character";
import ObjectRenderer from "@/components/game/renderers/object";

// TODO - figure out how to drag an object
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
        <ObjectRenderer interactableObjectsRef={interactableObjects} />
        <Asset url="assets/environments/dungeon.glb" />
      </Physics>
    </Canvas>
  );
}
