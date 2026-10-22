import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useRef, useState } from "react";
import type { Group } from "three";
import {
  useInteractableState,
  type InteractableObjectData,
} from "../stores/gameState";
import Asset from "./asset";
import Character from "./character";
import DebugLine from "./debug-line";
import Mesh from "./mesh";

type ItemData = Omit<InteractableObjectData, "action"> & { color: string };

const ITEM_DATA: ItemData = {
  name: "RedBoi",
  type: "box",
  id: 1,
  actionType: "open",
  color: "red",
};

const ITEM_DATA_2: ItemData = {
  name: "BlueBoi",
  type: "box",
  id: 2,
  actionType: "hold",
  color: "blue",
};

// TODO - figure out how to drag an object
export default function Game() {
  const interactableObjects = useRef<Group>(null);

  const [isInteracting, setIsInteracting] = useState(false);
  const { setObjectsInUse, objectsInUse } = useInteractableState();

  const interactionHandler = (itemData: ItemData) => {
    setIsInteracting(!isInteracting);

    if (objectsInUse.some((object) => object.id === itemData.id)) {
      return;
    }

    // TODO - we shouldn't need to add the action to this
    setObjectsInUse([...objectsInUse, { ...itemData, action: () => {} }]);
  };

  return (
    <Canvas>
      <Physics>
        <PointerLockControls enabled />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} color="orange" />
        <DebugLine />
        <Character interactableObjects={interactableObjects} />
        <group ref={interactableObjects}>
          <Mesh
            itemData={ITEM_DATA}
            rigidBodyType="fixed"
            position={[4, 1, 0]}
            boxGeometryArgs={[1, 1, 1]}
            interactionHandler={interactionHandler}
          />
          <Mesh
            itemData={ITEM_DATA_2}
            rigidBodyType="dynamic"
            position={[-4, 1, 0]}
            boxGeometryArgs={[1, 1, 1]}
            interactionHandler={interactionHandler}
          />
        </group>
        <Asset url="assets/environments/dungeon.glb" />
      </Physics>
    </Canvas>
  );
}
