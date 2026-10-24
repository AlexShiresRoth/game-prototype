export type ActionType =
  | "open"
  | "hold"
  | "activate"
  | "drag"
  | "pickup"
  | "use";

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
    type: ActionType;
  };
};

export type InteractableObjectData = {
  name: string;
  type: string;
  id: number;
  actionType: ActionType;
};
