# Remix-Slides

My attempt to build a slide deck app with MDX with Remix.

# Requirements & Fuctionality

MDX for writing slides

- Putting one or more MDX files in a folder is enough for the app to show the presentation slides.
- Separate slides with "---". See https://github.dev/jxnblk/mdx-deck/blob/a4779fc0555e26bc241afd8176661d41fd6981ac/packages/gatsby-plugin/src/split-slides.js#L1
- If multiple MDX files in a folder, then concatenate them all ordered by filename, before splitting.
- Multiple presentations by placing them in their own folder.
- Remix supports MDX out of the box, would that be an option, or not? https://remix.run/docs/en/v1/guides/mdx

Keyboard navigation

- Navigate to next slide with spacebar or right arrow.
- Navigate to previous slide with backspace or left arrow.

Theming and styling

- Create some "styled" components for aligning and positioning, which you can use in the MDX files.
- Could this be optional, so that just Markdown slides also work?
- Themable (borrow themes from MDX-Deck?).

Modes (see MDX-Deck)

- Presentation Mode
- Overview Mode
- Grid Mode
- Sync between tabs and windows, so you can have the presentation on one screen and the slides + notes on the other

# Prototype 🧪

- [x] 🗂 Put MDX files in a separate folder: Location of this folder?

- [x] 📄 Rendering MDX: Split on "---"

- [x] ➡️ Keyboard navigation: arrow keys for previous slide and next slide

- [ ] 💅 Basic CSS styling: Center content horizontally and vertically 😱

# TO DO

- [x] Open slides in presentation mode in separate tab

- [ ] Presentation slug route

- [ ] Navigation bar:

                    Slide 3 of 4
            [Previous] [1][2]3[4] [Next]

- [ ] Enable/disable navigation bar

---

.

.

.

.

.

.

.

.

.

.

.

.

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:6112](http://localhost:6112), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run build
# preview deployment
netlify deploy

# production deployment
netlify deploy --prod
```
