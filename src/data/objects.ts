import type { GameObject } from "@/types/interaction";

export const INTERACTABLE_OBJECTS: GameObject[] = [
  {
    name: "RedBoi",
    geometry: "box",
    id: 1,
    color: "red",
    position: [2, 1, 0],
    geometryArgs: [1, 1, 1],
    rigidBodyType: "fixed",
    interaction: {
      type: "open",
    },
  },
  {
    name: "BlueBoi",
    geometry: "box",
    id: 2,
    color: "blue",
    position: [4, 1, 0],
    geometryArgs: [1, 1, 1],
    rigidBodyType: "dynamic",
    interaction: {
      type: "hold",
    },
  },
];
