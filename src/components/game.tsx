import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Character from "./character";
import Floor from "./floor";
import Wall from "./wall";

export default function Game() {
  return (
    <Canvas>
      <Physics debug>
        <PointerLockControls enabled />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} color="white" />
        <Character />
        <group userData={{ type: "wall" }}>
          <Wall
            position={[2, 0, 6]}
            size={{ x: 0.2, y: 5, z: 3 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
          />
          <Wall
            position={[2, 0, 3]}
            size={{ x: 0.2, y: 5, z: 3 }}
            rotation={{ x: 90, y: Math.PI / 2, z: 0 }}
          />
        </group>
        <group userData={{ type: "floor" }}>
          <Floor position={[0, -1, 0]} size={{ x: 10, z: 10 }} />
          <Floor position={[10, -1, 0]} size={{ x: 10, z: 10 }} />
        </group>
      </Physics>
    </Canvas>
  );
}
