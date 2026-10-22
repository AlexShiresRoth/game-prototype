import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

type Props = {
  url: string;
};

export default function Asset({ url }: Props) {
  const asset = useGLTF(url);
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <primitive object={asset.scene} />
    </RigidBody>
  );
}
