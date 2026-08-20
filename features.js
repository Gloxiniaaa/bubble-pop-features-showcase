/* ================================================================
   FEATURE DATA
   ----------------------------------------------------------------
   This is the ONLY thing you edit to add features.

   1. Drop your .mp4 file into the /videos folder next to this file.
   2. Add one entry below with a title, the filename, and (optional)
      a short description.
   3. Save + refresh the page. That's it - no build step.

   Sections appear in the order listed. Each section can have as
   many features as you like; the list scrolls.
   ================================================================ */
window.FEATURE_DATA = [
  {
    section: "Bubble",
    color: "var(--green)",
    features: [
      { name: "ColorBall", file: "bubble-color-ball.mp4", desc: "Frame-perfect dodge with i-frames and a directional dash." },
      { name: "2ColorBall", file: "bubble-2color-ball.mp4", desc: "Tight parry timing that opens a guaranteed counter-hit." },
      { name: "EmptyBall", file: "bubble-empty-ball.mp4", desc: "Chain light attacks into a screen-shaking finisher." },
      { name: "Blackhole", file: "bubble-blackhole.mp4", desc: "Chain light attacks into a screen-shaking finisher." },
      { name: "Stone", file: "bubble-stone.mp4", desc: "Chain light attacks into a screen-shaking finisher." },
      { name: "Spiderweb", file: "bubble-spiderweb.mp4", desc: "Chain light attacks into a screen-shaking finisher." },
    ]
  },

  {
    section: "Booster",
    color: "var(--pink)",
    features: [
      { name: "4 Boosters", file: "booster-4.mp4", desc: "Bomb - Rainbow - Electric - Rocket" },
      { name: "Booster bonus", file: "booster-bonus.mp4", desc: "Detached bubbles ++bomb. Combos ++Rocket" },
      { name: "Unlimited booster", file: "booster-unlimit.mp4", desc: "The first time booster is introduced -> unlimited." },
      { name: "Purchase booster", file: "booster-purchase.mp4", desc: "During gameplay, buy a booster or watch an ads if you have none" },
    ]
  },
  {
    section: "Shooter",
    color: "var(--blue)",
    features: [
      { name: "Impact rings", file: "shooter-impact-rings.mp4", desc: "Swing across gaps and yank distant objects into range." },
      { name: "Detached bubbles", file: "shooter-detached.mp4", desc: "Swing across gaps and yank distant objects into range." },
      { name: "Ray", file: "shooter-ray.mp4", desc: "A second mid-air jump unlocked after the first boss." },
      { name: "Indicator", file: "shooter-indicator.mp4", desc: "A second mid-air jump unlocked after the first boss." },
      { name: "Hide header", file: "shooter-hide-header.mp4", desc: "Warp between discovered waypoints from the map screen." },
    ]
  },
  {
    section: "Queue",
    color: "var(--yellow)",
    features: [
      { name: "Queue", file: "queue-replace.mp4", desc: "Save and swap between full equipment presets." },
      { name: "Ensure queue", file: "queue-ensure.mp4", desc: "Recolor any armor piece using unlocked dye channels." },
    ]
  },
  {
    section: "Complete game",
    color: "var(--orange)",
    features: [
      { name: "A normal game flow", file: "gameflow-complete.mp4", desc: "Save and swap between full equipment presets." },
      { name: "Quit game", file: "gameflow-quit-game.mp4", desc: "Save and swap between full equipment presets." },
      { name: "Lose game", file: "gameflow-lose.mp4", desc: "Save and swap between full equipment presets." },
      { name: "Out of bullets", file: "gameflow-out-of-bullets.mp4", desc: "Recolor any armor piece using unlocked dye channels." },
    ]
  },
];
/* ================================================================ */
