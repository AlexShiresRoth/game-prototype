import type { GameObject } from "@/data";
import type { InteractableObjectData } from "@/types/interaction";
import { MeshCollider } from "@react-three/rapier";
import "./mesh.css";

type Props = {
  gameObject: GameObject;
  userData: InteractableObjectData;
};

export default function Mesh({ gameObject, userData }: Props) {
  return (
    <MeshCollider type="cuboid">
      <mesh
        position={gameObject.position}
        rotateOnAxis={["x", "y", "z"]}
        userData={userData}
      >
        <boxGeometry args={gameObject.geometryArgs} />
        <meshStandardMaterial color={gameObject.color} />
      </mesh>
    </MeshCollider>
  );
}
