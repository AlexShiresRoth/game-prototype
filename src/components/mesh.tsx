import { Html } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useInteractableState } from "../stores";
import "./mesh.css";

// TODO we're not going to want a check based on name
export default function Mesh() {
  const { name } = useInteractableState();
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
          {name === "RedBoi" && (
            <Html position={[0, 1, 0]}>
              <div className="interact-text-container">
                <h1>{`[E]`}</h1>
                <h1>Interact</h1>
              </div>
            </Html>
          )}
        </mesh>
      </MeshCollider>
    </RigidBody>
  );
}
