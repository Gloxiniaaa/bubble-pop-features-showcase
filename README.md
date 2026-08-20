# Feature Reel

A no-build page for showing off short portrait clips of your game's features.
Neobrutalist look - bold borders, hard shadows, flat color.

## Opening it

Just double-click `index.html` (or drag it into a browser tab). No server,
no deployment, no build step.

## Folder layout

```text
game-showcase/
|-- index.html      <- markup, style, and player logic
|-- features.js     <- feature sections and video filenames
`-- videos/         <- drop your .mp4 clips here
```

Keep videos next to `index.html` inside the `videos/` folder - the page
references them by relative path, so as long as the files travel together
(e.g. you zip the whole `game-showcase` folder to share it), it keeps working.

## Adding a new feature

Open `features.js`, find the `window.FEATURE_DATA` array, and add an entry:

```js
{
  section: "Combat",           // groups features under a header in the sidebar
  color: "var(--pink)",        // var(--pink) / var(--blue) / var(--green) / var(--yellow)
  features: [
    { name: "Dodge Roll", file: "combat-dodge-roll.mp4", desc: "One line about it." },
    // add more feature rows here
  ]
}
```

- To add a feature to an existing section, just add another object inside
  that section's `features` array.
- To add a whole new section, copy one of the `{ section: ..., color: ...,
  features: [...] }` blocks and paste it into the `window.FEATURE_DATA` array.
- `desc` is optional - leave it out (or set it to `""`) if you don't want
  caption text under the video.

Then drop the matching `.mp4` into `/videos` with the exact filename you
used, save, and refresh the page.

> **Note on "auto-detect":** browsers can't list the contents of a local
> folder for security reasons, so there's no way for the page to notice a
> new video file on its own - the one-line entry in `features.js` above
> *is* the registration step. It's intentionally the smallest possible
> version of that: a filename and a title in a small data file.

## Video tips

- Portrait orientation (the frame is 9:19.5, i.e. roughly a phone screen).
- Keep clips short (3-8s) and trimmed tight - they loop instantly on select.
- `.mp4` (H.264) has the best cross-browser support opened via a local file path.
- If a clip doesn't play, check the filename in `features.js` matches the
  file in `/videos` exactly, including the extension.

## Behavior

- Nothing plays until you pick a feature from the left sidebar.
- Selecting a feature loads its clip into the phone frame and loops it
  immediately.
- Clips play muted by default (browsers allow this reliably); use the
  "Sound on" button under the caption if your clips have audio you want to hear.

## Keyboard controls

- `Space`: pause or resume the current video.
- `Down Arrow` / `S`: next video.
- `Up Arrow` / `W`: previous video.
- `Right Arrow` / `D`: forward 1 second.
- `Left Arrow` / `A`: rewind 1 second.
