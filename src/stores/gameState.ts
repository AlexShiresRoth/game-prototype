import { create } from "zustand";

type InteractableObjectState = {
  name: string;
  type: string;
  setInteractableObject: (name: string, type: string) => void;
  resetInteractableObject: () => void;
};

export const useInteractableState = create<InteractableObjectState>()(
  (set) => ({
    name: "",
    type: "",
    setInteractableObject: (name: string, type: string) => set({ name, type }),
    resetInteractableObject: () => set({ name: "", type: "" }),
  }),
);
