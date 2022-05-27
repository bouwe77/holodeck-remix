# Remix-Slides

My attempt to build a slide deck app with MDX with Remix.

# Requirements & Fuctionality

MDX for writing slides

- Putting one or more MDX files in a folder is enough for the app to show the presentation slides.
- Separate slides with "---".
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

# TO DO 🧪

- [x] 🗂 Put MDX files in a separate folder, with sub folder for each presentation

- [x] 📄 Rendering MDX: Split on "---"

- [x] 📃 Split presentation slides into multiple files, both Markdown (.md) and MDX files (.mdx).

- [x] ➡️ Keyboard navigation: arrow keys for previous slide and next slide

- [x] 💅 Basic CSS styling: Center content horizontally and vertically, but also left align content 😱

- [x] ⚛️ Importing components into MDX, either those from `remix-slides`, or your own components.

- [x] 🖼 Portal that shows all presentation, and preview thunbnails of presentation slides.

- [ ] 🐞 Import component once per MDX file, so all slides can use it

- [ ] 🐞 Read importable React components once, upon start of the app, instead of when navigating each slide

- [ ] 🎡 Theming by customizing CSS from the `slides` folder, perhaps with frontmatter?

- [ ] 👩‍🏫 Presentation mode: Speaker notes, navigate though slides, sync between tabs (Broadcast API or web sockets?)

- [ ] ⚙️ Deploy to a cloud provider, however, how can I make sure other people can choose their own? 🤔

- [ ] 🔁 Having content in a single slide appear step by step, before moving to the next slide

- [ ] ♻️ Nicer transition between slides

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
