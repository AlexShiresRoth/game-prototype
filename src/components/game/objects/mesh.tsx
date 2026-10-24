import type { GameObject } from "@/types/interaction";
import { MeshCollider } from "@react-three/rapier";
import "./mesh.css";

type Props = {
  gameObject: GameObject;
};

export default function Mesh({ gameObject }: Props) {
  return (
    <MeshCollider type="cuboid">
      <mesh
        position={gameObject.position}
        rotateOnAxis={["x", "y", "z"]}
        userData={gameObject}
      >
        <boxGeometry args={gameObject.geometryArgs} />
        <meshStandardMaterial color={gameObject.color} />
      </mesh>
    </MeshCollider>
  );
}
