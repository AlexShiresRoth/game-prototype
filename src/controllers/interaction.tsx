import { INTERACTABLE_OBJECTS } from "@/data/objects";
import { useInteractableState } from "@/stores";
import type { GameObject } from "@/types/interaction";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * @description Open the object if it is not in use, otherwise close it
 * @param newObject - The object to open
 * @returns void
 */
function open(
  newObject: GameObject,
  objectsInUse: GameObject[],
  setObjectsInUse: (objects: GameObject[]) => void,
  setInteractableObject: (object: GameObject | null) => void,
) {
  const isObjectInUse = objectsInUse.some(
    (object) => object.id === newObject.id,
  );

  if (isObjectInUse) {
    const filteredObjects = objectsInUse.filter(
      (object) => object.id !== newObject.id,
    );
    setObjectsInUse(filteredObjects);
    setInteractableObject(null);
  } else {
    setObjectsInUse([...objectsInUse, newObject]);
    setInteractableObject(newObject);
  }
}

export default function InteractionController({ children }: Props) {
  const {
    interactableObject,
    setObjectsInUse,
    objectsInUse,
    setInteractableObject,
  } = useInteractableState();

  const [subscribeKeyboardControls] = useKeyboardControls();

  /**
   * @description Each object can have its own interaction type
   * which we must handle with different functions
   * @param interactableObject - The object to handle the interaction for
   * @returns void
   */
  useEffect(() => {
    if (interactableObject) {
      return subscribeKeyboardControls(
        (state) => state.interact,
        (pressed) => {
          // could maybe handle hold here
          if (!pressed) return;

          {
            const foundObject = INTERACTABLE_OBJECTS.find(
              (object) => object.id === interactableObject.id,
            );

            if (!foundObject) return;

            const type = foundObject.interaction.type;

            switch (type) {
              case "pickup":
                console.log("picking up item");
                break;
              case "use":
                console.log("using item");
                break;
              case "open":
                console.log("opening item");
                open(
                  interactableObject,
                  objectsInUse,
                  setObjectsInUse,
                  setInteractableObject,
                );
                break;
              case "hold":
                console.log("holding item");
                break;
              case "activate":
                console.log("activating item");
                break;
              case "drag":
                console.log("dragging item");
                break;
              default:
                console.log("unknown interaction type");
                break;
            }
          }
        },
      );
    }
  }, [
    interactableObject,
    objectsInUse,
    setObjectsInUse,
    setInteractableObject,
    subscribeKeyboardControls,
  ]);

  return children;
}
