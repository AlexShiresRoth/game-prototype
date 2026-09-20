import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";
import type { Controls } from "./controller";

const SPEED = 3;

export default function Character() {
  const { camera } = useThree();
  const playerRef = useRef<RapierRigidBody | null>(null);
  const direction = useRef(new Vector3());
  const rightDirection = useRef(new Vector3());
  const movement = useRef(new Vector3());
  const forward = useKeyboardControls<keyof Controls>((state) => state.forward);
  const left = useKeyboardControls<keyof Controls>((state) => state.left);
  const right = useKeyboardControls<keyof Controls>((state) => state.right);
  const backward = useKeyboardControls<keyof Controls>(
    (state) => state.backward,
  );
  const jump = useKeyboardControls<keyof Controls>((state) => state.jump);

  useFrame(() => {
    const player = playerRef.current;

    if (player) {
      const rightDir = rightDirection.current;
      const mov = movement.current;
      const dir = direction.current;

      mov.set(0, 0, 0);
      camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();

      rightDir.crossVectors(dir, camera.up).normalize();

      if (forward) mov.add(dir);
      if (backward) mov.sub(dir);
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
          y: jump && velocity.y <= 0 ? 5 : velocity.y,
          z: mov.z,
        },
        true,
      );

      const position = player.translation();
      camera.position.set(position.x, position.y + 1, position.z);
    }
    return null;
  });

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
