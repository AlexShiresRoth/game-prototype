export default function Wall() {
  return (
    <mesh position={[5, 0, 0]}>
      <boxGeometry args={[0.2, 3, 3]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}
