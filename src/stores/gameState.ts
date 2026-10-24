import type { GameObject } from "@/types/interaction";
import { create } from "zustand";

type InteractableObjectState = {
  interactableObject: GameObject | null;
  setInteractableObject: (interactableObject: GameObject | null) => void;
  resetInteractableObject: () => void;
  objectsInUse: GameObject[];
  setObjectsInUse: (objectsInUse: GameObject[]) => void;
  resetObjectsInUse: () => void;
};

export const useInteractableState = create<InteractableObjectState>()(
  (set) => ({
    interactableObject: null,
    setInteractableObject: (interactableObject: GameObject | null) =>
      set({ interactableObject }),
    resetInteractableObject: () =>
      set({
        interactableObject: null,
      }),
    objectsInUse: [],
    setObjectsInUse: (objectsInUse: GameObject[]) => set({ objectsInUse }),
    resetObjectsInUse: () => set({ objectsInUse: [] }),
  }),
);
