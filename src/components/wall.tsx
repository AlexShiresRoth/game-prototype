import type { Vector3 } from "@react-three/fiber";
import { MeshCollider, RigidBody } from "@react-three/rapier";

type Props = {
  position: Vector3;
  size: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
};

export default function Wall({ position, size, rotation }: Props) {
  return (
    <RigidBody type="fixed">
      <MeshCollider type="cuboid">
        <mesh
          position={position}
          rotateOnAxis={["x", "y", "z"]}
          rotation={[rotation.x, rotation.y, rotation.z]}
        >
          <boxGeometry args={[size.x, size.y, size.z]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
