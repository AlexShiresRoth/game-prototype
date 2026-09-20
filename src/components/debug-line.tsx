import { Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import type { Line2 } from "three/examples/jsm/Addons.js";

type Props = {
  distance?: number;
};
export default function DebugLine({ distance = 1 }: Props) {
  const { camera } = useThree();

  const direction = useRef(new Vector3());
  const end = useRef(new Vector3());
  const lineRef = useRef<Line2>(null);
  useFrame(() => {
    camera.getWorldDirection(direction.current);

    end.current
      .copy(camera.position.clone())
      .add(direction.current.clone().multiplyScalar(distance));

    lineRef.current?.geometry.setPositions([
      camera.position.x,
      camera.position.y,
      camera.position.z,
      end.current.x,
      end.current.y,
      end.current.z,
    ]);
  }, -1);

  return (
    <Line
      ref={lineRef}
      points={[
        [0, 1, 0],
        [0, 0, -10],
      ]}
      color="red"
      lineWidth={5}
    />
  );
}
