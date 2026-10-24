import { useInteractableState } from "@/stores/gameState";
import type { GameObject } from "@/types/interaction";
import { RigidBody } from "@react-three/rapier";
import InteractionHUD from "../ui/interaction-hud";
import ObjectMenuHUD from "../ui/object-menu-hud";
import Mesh from "./mesh";

type Props = {
  gameObject: GameObject;
};

export default function InteractableObject({ gameObject }: Props) {
  const { interactableObject } = useInteractableState();
  const { objectsInUse } = useInteractableState();

  const [x, y, z] = gameObject.position;
  const isObjectInUse = objectsInUse.some(
    (object) => object.id === gameObject.id,
  );
  const interactableObjectId = interactableObject?.id;
  const isLookingAtObject = interactableObjectId === gameObject.id;

  return (
    <RigidBody type={gameObject.rigidBodyType} position={gameObject.position}>
      <Mesh gameObject={gameObject} />
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
