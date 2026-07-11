/**
 * storyState - the single source of truth for the persistent 3D cube.
 *
 * Every Home section's ScrollTrigger writes into this plain object (GSAP
 * tweens it directly); the fixed StoryCube canvas reads it every frame.
 * This is how the object "travels" with the scroll and transforms per
 * chapter - one protagonist, one continuous story.
 */
export const storyState = {
  /** World-space offsets of the whole rig. */
  x: 0,
  y: -1.7,
  scale: 1,
  /** Extra rotation added on top of idle motion (radians). */
  rot: 0,
  /** Hero scroll progress - one revolution across the opening chapter. */
  spin: 0,
  /** 0 = intact cube · 1 = fractured into four quarters around the core. */
  split: 0,
  /** 0 = cube form · 1 = the four-capsule signature shape (brand mark). */
  capsule: 0,
  /** Global presence (fades the rig in/out between chapters). */
  visible: 0,
  /** Satellite orbit presence (hero shows them; later chapters dim them). */
  satellites: 1,
  /** Accent rim-light color - retinted per agent panel. */
  accentR: 0.608,
  accentG: 0.361,
  accentB: 0.965,
  /** Camera dolly - chapters push in and pull back like a filmed scene. */
  camZ: 9.6,
  camY: 0.15,
};
