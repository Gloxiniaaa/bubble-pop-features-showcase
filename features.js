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
      { name: "ColorBall", file: "bubble-color-ball.mp4", desc: "Standard colored bubble — match 3+ of the same color to pop them." },
      { name: "2ColorBall", file: "bubble-2color-ball.mp4", desc: "Two-tone bubble that matches with either of its two colors." },
      { name: "EmptyBall", file: "bubble-empty-ball.mp4", desc: "Placeholder bubble — the shot ray passes through it and it is removed on contact." },
      { name: "Blackhole", file: "bubble-blackhole.mp4", desc: "Black hole that sucks in a bubble that cannot match (spinning animation)." },
      { name: "Stone", file: "bubble-stone.mp4", desc: "Hard blocker — ignores every match, even Rainbow." },
      { name: "Spiderweb", file: "bubble-spiderweb.mp4", desc: "Counts toward a chain, but the web is destroyed instead of the bubbles popping." },
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
      { name: "Impact rings", file: "shooter-impact-rings.mp4", desc: "Expanding rings at the impact spot show the matched area." },
      { name: "Detached bubbles", file: "shooter-detached.mp4", desc: "Bubbles cut off from the ceiling fall and clear automatically." },
      { name: "Ray", file: "shooter-ray.mp4", desc: "Aim guide that predicts the shot path, including wall bounces." },
      { name: "Indicator", file: "shooter-indicator.mp4", desc: "Landing indicator showing where the shot will stick, plus booster radius." },
      { name: "Hide header", file: "shooter-hide-header.mp4", desc: "The gameplay header hides for an unobstructed view while playing." },
    ]
  },
  {
    section: "Queue",
    color: "var(--yellow)",
    features: [
      { name: "Queue", file: "queue-replace.mp4", desc: "Next-bubble queue with tap-to-swap and bonus firework feedback." },
      { name: "Ensure queue", file: "queue-ensure.mp4", desc: "Queue generation guarantees the upcoming shot can form a match." },
    ]
  },
  {
    section: "Game flow",
    color: "var(--orange)",
    features: [
      { name: "A normal game flow", file: "gameflow-complete.mp4", desc: "One complete level — shoot, match, and win." },
      { name: "Quit game", file: "gameflow-quit-game.mp4", desc: "Leaving a level mid-game returns to the map." },
      { name: "Lose game", file: "gameflow-lose.mp4", desc: "Lose when the grid reaches the danger line." },
      { name: "Out of bullets", file: "gameflow-out-of-bubbles.mp4", desc: "Run out of bubbles — buy a refill or end the level." },
      { name: "Fast forward", file: "gameflow-fastforward.mp4", desc: "Skip/fast-forward the victory sequence at 4x speed." },
      { name: "Ingame store", file: "gameflow-ingame-store.mp4", desc: "In-game popup to buy a booster mid-level (or watch an ad)." },
    ]
  },
  {
    section: "Home",
    color: "var(--red)",
    features: [
      { name: "Infinite scroll", file: "home-infinite-scroll.mp4", desc: "Home map with infinitely scrolling level selection." },
      { name: "Settings/ Button feedback", file: "home-settings.mp4", desc: "Settings popup with responsive button feedback." },
      { name: "Daily rewards", file: "home-daily-rewards.mp4", desc: "Daily quest popup with claimable rewards." },
      { name: "Daily rewards introduction", file: "home-daily-rewards-introduce.mp4", desc: "First-time introduction to the daily rewards." },
      { name: "Daily bonus", file: "home-daily-bonus.mp4", desc: "Daily bonus tab — claim a streak reward each day." },
      { name: "Spinning Wheel", file: "home-wheel.mp4", desc: "Prize wheel popup — spin for a reward." },
      { name: "Chests", file: "home-chest.mp4", desc: "Chest reward popups — star and level chests." },
      { name: "Tabs", file: "home-tabs.mp4", desc: "Bottom navigation tabs (Home, Store, Bonus, Leaderboard, Social)." },
      { name: "Lives", file: "home-lives.mp4", desc: "Lives popup — refill or buy more lives." },
    ]
  },
];
/* ================================================================ */
