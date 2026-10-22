import type { GameObject } from "@/data/objects";
import { useInteractableState } from "@/stores/gameState";
import type { InteractableObjectData } from "@/types/interaction";
import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import InteractionHUD from "../ui/interaction-hud";
import ObjectMenuHUD from "../ui/object-menu-hud";
import Mesh from "./mesh";

type Props = {
  gameObject: GameObject;
};

type ObjectUserData = InteractableObjectData & { interactable: boolean };

export default function InteractableObject({ gameObject }: Props) {
  const {
    interactableObject: { id: currentInteractableId },
  } = useInteractableState();

  const [isInteracting, setIsInteracting] = useState(false);
  const { setObjectsInUse, objectsInUse } = useInteractableState();

  const [x, y, z] = gameObject.position;

  const interactionHandler = (itemData) => {
    setIsInteracting(!isInteracting);

    if (objectsInUse.some((object) => object.id === itemData.id)) {
      return;
    }

    // TODO - we shouldn't need to add the action to this
    setObjectsInUse([...objectsInUse, { ...itemData }]);
  };

  const isObjectInUse = objectsInUse.some(
    (object) => object.id === gameObject.id,
  );

  const isLookingAtObject = currentInteractableId === gameObject.id;

  const userData: ObjectUserData = {
    ...gameObject,
    interactable: true,
    // THis is kinda rudimentary, also we probably need to show a menu with the mouse cursor to interact with the object
    // also need to handle closing the menu?
    // action: () => interactionHandler(itemData),
  };
  console.log("userData", userData);

  return (
    <RigidBody type={gameObject.rigidBodyType} position={gameObject.position}>
      <Mesh gameObject={gameObject} userData={userData} />
      {isLookingAtObject && !isObjectInUse && (
        <InteractionHUD
          actionType={gameObject.interaction.type}
          objectPosition={[x, y + 1, z]}
        />
      )}
      {isObjectInUse && <ObjectMenuHUD objectPosition={[x, y + 1, z]} />}
    </RigidBody>
  );
}
