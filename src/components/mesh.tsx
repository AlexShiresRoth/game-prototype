export default function Mesh() {
  return (
    <mesh position={[0, 1, 0]} rotateOnAxis={["x", "y", "z"]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
