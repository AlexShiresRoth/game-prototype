# Solo Prototype Scope — React Three Fiber

## Goal

Demonstrate one memorable resonance puzzle, atmospheric exploration, and a narrative payoff that invites players into a larger mystery. This is **not** a full RPG vertical slice yet.

## Phase A: First playable (5–10 minutes)

**Must have**
- Functional third-person character controller and camera.
- One grayboxed ancient chamber and short approach corridor.
- Basic interaction prompts and inspectable clues.
- Three-resonator puzzle with clear non-audio-only feedback.
- Scripted chamber activation and strong visual/audio payoff.
- A simple final reveal: reconstruction begins or altered ship appears.

**Nice to have**
- One dialogue interaction or radio transmission.
- Short memory flash.
- A rudimentary ship model visible from chamber.

## Phase B: Opening chapter (15–25 minutes)

- Cockpit with scripted siren approach (not flight simulation).
- Wrecked ship compartments and missing-crew investigation.
- Surviving engineer and limited dialogue.
- Ancient corridors connecting wreck to chamber.
- Ship reconstruction sequence and transit map.
- Short end-of-demo departure.

## Explicitly out of scope

Combat, inventory economy, companion AI pathfinding, multiple systems, fully flyable spaceship, seamless space travel, sophisticated cutscenes, online features, complete galaxy lore, save-game complexity beyond basic checkpoints.

## Current technical direction

React, TypeScript, React Three Fiber, Drei, Rapier, Zustand, Web Audio API. Existing player movement and interaction architecture can be reused. Keep rendering components separate from game state/controllers. Consider a dedicated game engine later if multidisciplinary production warrants it; do not migrate before validating fun.

## Completion criteria

- An unfamiliar tester can navigate and solve the puzzle without coaching.
- They understand the siren signal is dangerous, the machinery is ancient, and the ship has changed.
- They want to know what happens next.
- Prototype runs acceptably on a representative target desktop browser.
