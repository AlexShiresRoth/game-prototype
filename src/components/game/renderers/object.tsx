import { INTERACTABLE_OBJECTS } from "@/data";
import { type Group } from "three";
import InteractableObject from "../objects/interactable";

type Props = {
  interactableObjectsRef: React.RefObject<Group | null>;
};

export default function ObjectRenderer({ interactableObjectsRef }: Props) {
  const objects = INTERACTABLE_OBJECTS;

  return (
    <group ref={interactableObjectsRef}>
      {objects.map((object) => (
        <InteractableObject key={object.id} gameObject={object} />
      ))}
    </group>
  );
}
