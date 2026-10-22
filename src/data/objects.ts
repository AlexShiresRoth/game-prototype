export type GameObject = {
  id: number;
  name: string;
  geometry: "box" | "sphere" | "cylinder";
  color: string;
  position: [number, number, number];
  geometryArgs?: [number, number, number];
  rigidBodyType:
    | "fixed"
    | "dynamic"
    | "kinematicPosition"
    | "kinematicVelocity";
  interaction: {
    type: "open" | "hold" | "activate" | "drag" | "pickup" | "use";
  };
};

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
