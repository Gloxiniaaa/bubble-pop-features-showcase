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
    section: "Combat",
    color: "var(--pink)",
    features: [
      { name: "Dodge Roll",     file: "combat-dodge-roll.mp4",     desc: "Frame-perfect dodge with i-frames and a directional dash." },
      { name: "Parry Window",   file: "combat-parry.mp4",          desc: "Tight parry timing that opens a guaranteed counter-hit." },
      { name: "Combo Finisher", file: "combat-combo-finisher.mp4", desc: "Chain light attacks into a screen-shaking finisher." },
    ]
  },
  {
    section: "Exploration",
    color: "var(--blue)",
    features: [
      { name: "Grapple Hook",  file: "exploration-grapple.mp4",     desc: "Swing across gaps and yank distant objects into range." },
      { name: "Double Jump",   file: "exploration-double-jump.mp4", desc: "A second mid-air jump unlocked after the first boss." },
      { name: "Fast Travel",   file: "exploration-fast-travel.mp4", desc: "Warp between discovered waypoints from the map screen." },
    ]
  },
  {
    section: "Customization",
    color: "var(--green)",
    features: [
      { name: "Gear Loadouts", file: "customization-loadouts.mp4", desc: "Save and swap between full equipment presets." },
      { name: "Dye System",    file: "customization-dye.mp4",      desc: "Recolor any armor piece using unlocked dye channels." },
    ]
  },
];
/* ================================================================ */
