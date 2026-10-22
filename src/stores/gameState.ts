import type { ActionType, InteractableObjectData } from "@/types/interaction";
import { create } from "zustand";

type InteractableObjectState = {
  interactableObject: InteractableObjectData;
  setInteractableObject: ({
    name,
    type,
    id,
    actionType,
    action,
  }: {
    name: string;
    type: string;
    id: number;
    actionType: ActionType;
    action: () => void;
  }) => void;
  resetInteractableObject: () => void;
  objectsInUse: InteractableObjectData[];
  setObjectsInUse: (objectsInUse: InteractableObjectData[]) => void;
  resetObjectsInUse: () => void;
};

const defaultInteractableObject: InteractableObjectData = {
  name: "",
  type: "",
  id: -1,
  actionType: "pickup",
  action: () => {},
};

export const useInteractableState = create<InteractableObjectState>()(
  (set) => ({
    interactableObject: defaultInteractableObject,
    setInteractableObject: (interactableObject: InteractableObjectData) =>
      set({ interactableObject }),
    resetInteractableObject: () =>
      set({
        interactableObject: {
          ...defaultInteractableObject,
        },
      }),
    objectsInUse: [],
    setObjectsInUse: (objectsInUse: InteractableObjectData[]) =>
      set({ objectsInUse }),
    resetObjectsInUse: () => set({ objectsInUse: [] }),
  }),
);

// TODO idk if we need this
export const handleInteract = (interactableObject: {
  name: string;
  type: string;
  id: number;
  actionType: ActionType;
}) => {
  switch (interactableObject.actionType) {
    case "pickup":
      console.log("picking up item");
      break;
    case "use":
      console.log("using item");
      break;
    case "open":
      console.log("opening item");
      break;
  }
};
