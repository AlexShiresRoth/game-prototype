import { MeshCollider, RigidBody } from "@react-three/rapier";

export default function Mesh() {
  return (
    <RigidBody type="fixed">
      <MeshCollider type="cuboid">
        <mesh
          position={[0, 1, 0]}
          rotateOnAxis={["x", "y", "z"]}
          userData={{ type: "box", interactable: true, name: "RedBoi" }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
