import type { Vector3 } from "@react-three/fiber";
import { MeshCollider, RigidBody } from "@react-three/rapier";

type Props = {
  position: Vector3;
  size: { x: number; z: number };
};

export default function Floor({ position, size }: Props) {
  return (
    <RigidBody lockTranslations lockRotations type="fixed">
      <MeshCollider type="cuboid">
        <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[size.x, size.z]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
