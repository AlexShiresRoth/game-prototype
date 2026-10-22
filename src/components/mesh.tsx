import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useInteractableState, type InteractableObjectData } from "../stores";
import InteractionHUD from "./interaction-hud";
import "./mesh.css";
import ObjectMenuHUD from "./object-menu-hud";

type ItemData = Omit<InteractableObjectData, "action"> & { color: string };

type MeshProps = {
  rigidBodyType:
    | "fixed"
    | "dynamic"
    | "kinematicPosition"
    | "kinematicVelocity";
  position?: [number, number, number];
  boxGeometryArgs?: [number, number, number];
  itemData: Omit<InteractableObjectData, "action"> & { color: string };
  interactionHandler: (itemData: ItemData) => void;
};

export default function Mesh({
  rigidBodyType = "fixed",
  position = [0, 0, 0],
  boxGeometryArgs,
  itemData,
  interactionHandler,
}: MeshProps) {
  const {
    interactableObject: { id },
  } = useInteractableState();

  // TODO can we/should we memoize this?
  const objectsInUse = useInteractableState((state) => state.objectsInUse);

  const isObjectInUse = objectsInUse.some(
    (object) => object.id === itemData.id,
  );

  const isLookingAtObject = id === itemData.id;

  const userData: InteractableObjectData & { interactable: boolean } = {
    ...itemData,
    interactable: true,
    // THis is kinda rudimentary, also we probably need to show a menu with the mouse cursor to interact with the object
    // also need to handle closing the menu?
    action: () => interactionHandler(itemData),
  };

  return (
    <RigidBody type={rigidBodyType} position={position}>
      <MeshCollider type="cuboid">
        <mesh
          position={position}
          rotateOnAxis={["x", "y", "z"]}
          userData={userData}
        >
          <boxGeometry args={boxGeometryArgs} />
          <meshStandardMaterial color={itemData.color} />
          {isLookingAtObject && !isObjectInUse && (
            <InteractionHUD actionType={userData.actionType} />
          )}
          {isObjectInUse && <ObjectMenuHUD />}
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
