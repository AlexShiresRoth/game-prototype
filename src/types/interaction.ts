export type ActionType =
  | "open"
  | "hold"
  | "activate"
  | "drag"
  | "pickup"
  | "use";

export type InteractableObjectData = {
  name: string;
  type: string;
  id: number;
  actionType: ActionType;
  action: () => void;
};
