# Co-op Realm Dungeon Prototype

## Prototype Goal

Keep the prototype brutally small enough to answer one question:

> **Is it fun to sneak through a dangerous space, learn a monster's
> rule, find the right item, and use it to escape?**

## Suggested Stack

-   Vite
-   React
-   TypeScript
-   `@react-three/fiber`
-   `@react-three/drei`
-   `@react-three/rapier`
-   Zustand (optional, for simple game state)

Multiplayer comes later, after the solo gameplay loop works.

------------------------------------------------------------------------

## Step 1 --- Project Setup

Set up the React/Three.js project and get a basic 3D scene running.

**Goal:** Launch into a 3D scene, move around, and collide with walls.

## Step 2 --- Build One Ugly Dungeon

Use gray boxes and placeholder geometry.

The dungeon only needs: - One hallway - 3--4 rooms - A couple of doors -
One dead end - One exit

No procedural generation. No polished assets. No lore. No beautiful
dark-fantasy forest yet.

**Special Boy is banned from environment art for now.**

## Step 3 --- Player Movement

Add basic first-person controls: - WASD movement - Mouse look - Sprint -
Crouch, if useful for stealth - Collision

Don't worry about character animation yet. The player can simply use a
capsule collider.

## Step 4 --- One Monster

Create one enemy using a placeholder model.

Give it only three states: 1. **Patrol** 2. **Investigate** 3. **Chase**

Start with simple sight detection. If the monster sees the player, it
chases. If it loses sight, it searches briefly and eventually returns to
patrol.

## Step 5 --- Make Hiding Work

Add line-of-sight blocking and/or simple hiding spots.

The important gameplay moment is:

> Monster enters room → player hides behind something → monster walks
> past.

If that isn't tense or satisfying, improve it before adding more
systems.

## Step 6 --- Add One Monster Rule

Example:

> **The creature will not enter bright light.**

Place one lantern somewhere in the dungeon. Before finding it, the
player can only avoid the creature. After finding it, the player gains a
new way to manipulate it.

## Step 7 --- Add a Tiny Inventory

Give the player **two inventory slots**.

-   **Lantern** --- repels the monster.
-   **Key** --- opens the exit.
-   **Rock** --- can be thrown to distract the monster.

No item stats. No rarity system. No crafting.

## Step 8 --- Add the Objective

> **Find the key and escape.**

Place the key somewhere that forces the player to deal with the monster.

The gameplay loop is now:

**Explore → encounter danger → avoid → discover item → understand rule →
retrieve objective → escape**

## Step 9 --- Add Failure

If the monster catches the player: - Player dies - Run ends - Restart
quickly

Keep restart time extremely short.

## Step 10 --- Add Audio Early

Add simple sounds for: - Monster footsteps - Distant breathing/growls -
Doors - Lantern - Player footsteps

A gray cube with terrifying audio can be scarier than a beautiful
monster with no sound.

## Step 11 --- Playtest the Solo Loop

Ask: - Is it clear when the monster can see me? - Does hiding feel
fair? - Does finding the lantern change how I behave? - Does retrieving
the key feel dangerous? - Does escaping feel satisfying? - Is the
monster encounter actually tense?

The benchmark:

> **"Okay, that was actually kinda tense."**

If not, improve the existing loop rather than adding features.

## Step 12 --- Add a Second Player

Only introduce networking after the solo prototype works.

Initial multiplayer requirements: - Two players can connect - Players
can see each other - Movement synchronizes - Monster position/state
synchronizes - Item pickups synchronize - Door state synchronizes

Nothing fancy yet.

## Step 13 --- Make Co-op Matter

Add one mechanic that makes cooperation useful.

For example: - One player carries the lantern - Another carries the
key - Inventory space is limited - One player distracts the monster
while another retrieves the objective

Test whether communication itself creates fun.

## Step 14 --- Add One Private Entity Message

During the run, randomly select one player and privately display:

> **"Do not let them open the red door."**

Do not explain whether the message is truthful.

That's enough to test whether asymmetric information creates interesting
conversations and distrust without turning the game into full social
deduction.

## Step 15 --- Stop and Evaluate

Before adding more monsters, environments, progression, or story,
playtest with other people.

Ask: - Did people laugh? - Did they panic? - Did they argue? - Did they
make plans? - Did unexpected situations emerge? - Did they want another
run?

If yes, the prototype has earned expansion.

------------------------------------------------------------------------

# Prototype Scope

Target a complete run of roughly **10--15 minutes**.

## Milestones

1.  **Movement** --- Walk through the dungeon.
2.  **Monster** --- Monster can patrol and hunt the player.
3.  **Stealth** --- Player can hide and survive.
4.  **Monster Rule** --- Lantern changes the monster's behavior.
5.  **Objective** --- Find the key and escape.
6.  **Atmosphere** --- Audio creates tension.
7.  **Multiplayer** --- Two players can complete the run together.
8.  **Entity** --- One player receives private information.

# Explicitly Out of Scope

Do **not** build these for the first prototype:

-   Procedural dungeon generation
-   Character classes
-   Skill trees
-   Traditional RPG stats
-   Crafting
-   Persistent progression
-   Multiple environments
-   Large lore systems
-   14 enemy archetypes
-   Advanced character animation
-   Cosmetics
-   Matchmaking
-   Full social-deduction systems
-   Complex entity AI
-   Steam integration
-   Idea Goblin Games LLC

The first prototype needs **one hallway, one monster, a few items, and a
reason to be scared of the monster.**

Prove that first. Then let the Idea Goblin out of its cage.
