import { Html } from "@react-three/drei";

const ROWS = 6;
const COLUMNS = 6;

// TODO - i'm not sure this is the best idea or if we should open
// an overlay menu and pause the game

type Props = {
  objectPosition: [number, number, number];
};
export default function ObjectMenuHUD({ objectPosition }: Props) {
  return (
    <Html position={objectPosition} center>
      <div className="object-menu-hud">
        <h1>Object Menu HUD</h1>
        {Array.from({ length: ROWS }).map((_, index) => (
          <div key={index} className="items-row">
            {Array.from({ length: COLUMNS }).map((_, col) => (
              <div key={col} className="col">
                <h1>Item</h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Html>
  );
}
