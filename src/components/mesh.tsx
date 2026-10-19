import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { useInteractableState, type InteractableObjectData } from "../stores";
import InteractionHUD from "./interaction-hud";
import "./mesh.css";
import ObjectMenuHUD from "./object-menu-hud";

const ITEM_DATA: Omit<InteractableObjectData, "action"> = {
  name: "RedBoi",
  type: "box",
  id: 1,
  actionType: "open",
};

export default function Mesh() {
  const [isInteracting, setIsInteracting] = useState(false);
  const {
    interactableObject: { id },
    setObjectsInUse,
  } = useInteractableState();

  // TODO can we/should we memoize this?
  const objectsInUse = useInteractableState((state) => state.objectsInUse);

  const isObjectInUse = objectsInUse.some(
    (object) => object.id === ITEM_DATA.id,
  );
  const isLookingAtObject = id === ITEM_DATA.id;

  const interactWithObject = () => {
    setIsInteracting(!isInteracting);

    if (objectsInUse.some((object) => object.id === ITEM_DATA.id)) {
      return;
    }

    // TODO - we shouldn't need to add the action to this
    setObjectsInUse([...objectsInUse, { ...ITEM_DATA, action: () => {} }]);
  };

  const userData: InteractableObjectData & { interactable: boolean } = {
    ...ITEM_DATA,
    interactable: true,
    // THis is kinda rudimentary, also we probably need to show a menu with the mouse cursor to interact with the object
    // also need to handle closing the menu?
    action: () => interactWithObject(),
  };

  return (
    <RigidBody type="fixed">
      <MeshCollider type="cuboid">
        <mesh
          position={[0, 1, 0]}
          rotateOnAxis={["x", "y", "z"]}
          userData={userData}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
          {isLookingAtObject && !isObjectInUse && (
            <InteractionHUD actionType={userData.actionType} />
          )}
          {isObjectInUse && <ObjectMenuHUD />}
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
