import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef, type RefObject } from "react";
import { Group, Raycaster, Vector3 } from "three";
import { useInteractableState } from "../stores";
import type { Controls } from "./controller";

const SPEED = 4;

type Props = {
  interactableObjects: RefObject<Group | null>;
};

export default function Character({ interactableObjects }: Props) {
  const { camera } = useThree();
  const { setInteractableObject, name, resetInteractableObject } =
    useInteractableState();
  const playerRef = useRef<RapierRigidBody | null>(null);

  const cameraDirection = useRef(new Vector3());

  const movementDirection = useRef(new Vector3());

  const rightDirection = useRef(new Vector3());
  const movement = useRef(new Vector3());
  const raycast = useRef(new Raycaster());

  const forward = useKeyboardControls<keyof Controls>((state) => state.forward);
  const left = useKeyboardControls<keyof Controls>((state) => state.left);
  const right = useKeyboardControls<keyof Controls>((state) => state.right);
  const backward = useKeyboardControls<keyof Controls>(
    (state) => state.backward,
  );
  const jump = useKeyboardControls<keyof Controls>((state) => state.jump);
  const interact = useKeyboardControls<keyof Controls>(
    (state) => state.interact,
  );

  useFrame(() => {
    const player = playerRef.current;
    const ray = raycast.current;

    if (player) {
      const cameraDir = cameraDirection.current;
      const moveDir = movementDirection.current;
      const rightDir = rightDirection.current;
      const mov = movement.current;

      // Get the REAL direction the camera is looking.
      // Do not flatten this — the ray needs vertical direction too.
      camera.getWorldDirection(cameraDir);

      // Copy the camera direction for movement,
      // then remove its vertical component.
      moveDir.copy(cameraDir);
      moveDir.y = 0;
      moveDir.normalize();

      mov.set(0, 0, 0);

      // Right direction should also be based on our
      // flattened movement direction.
      rightDir.crossVectors(moveDir, camera.up).normalize();

      if (forward) mov.add(moveDir);
      if (backward) mov.sub(moveDir);
      if (left) mov.sub(rightDir);
      if (right) mov.add(rightDir);

      if (mov.lengthSq() > 0) {
        mov.normalize();
        mov.multiplyScalar(SPEED);
      }

      const velocity = player.linvel();

      // TODO figure out if player collided with ground
      player.setLinvel(
        {
          x: mov.x,
          y: jump ? 5 : velocity.y,
          z: mov.z,
        },
        true,
      );

      const position = player.translation();

      camera.position.set(position.x, position.y + 1, position.z);

      // Raycasting
      ray.near = 0;
      ray.far = 5;

      ray.set(camera.position, cameraDir);

      const intersects = ray.intersectObjects(
        interactableObjects.current?.children ?? [],
        true,
      );

      if (interact) {
        console.log("interact", intersects);
      }

      if (intersects.length > 0) {
        for (const i of intersects) {
          if (i.object.userData.interactable) {
            // set state here
            if (name !== i.object.userData.name) {
              setInteractableObject(
                i.object.userData.name,
                i.object.userData.type,
              );
              if (interact) {
                console.log("interacting", i.object);
              }
            }
          }
        }
        // run state only once for updates
      } else if (name !== "" && intersects.length === 0) {
        resetInteractableObject();
      }
    }

    return null;
  }, -2);

  return (
    <RigidBody
      ref={playerRef}
      lockRotations
      colliders={false}
      position={[0, 1, 0]}
    >
      <CapsuleCollider args={[0.5, 0.5]} />
    </RigidBody>
  );
}
