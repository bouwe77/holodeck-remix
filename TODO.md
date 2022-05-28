# TO DO

## Requirements & Fuctionality

MDX for writing slides

- Putting one or more MD or MDX files in a folder is enough for the app to show the presentation slides.
- Separate slides with "---".
- Multiple presentations by placing them in their own folder.

Keyboard navigation

- Navigate to next or previous slide with spacebar, backspace, or arrow keys.

Theming and styling

- Create some "styled" components for aligning and positioning, which you can use in the MDX files.
- Themable (borrow themes from MDX-Deck?).

Modes (see MDX-Deck)

- Presentation Mode
- Overview Mode
- Grid Mode
- Sync between tabs and windows, so you can have the presentation on one screen and the slides + notes on the other

## TO DO list 🔜

- [x] 🗂 Put MDX files in a separate folder, with sub folder for each presentation

- [x] 📄 Rendering both MD and MDX: Split on "---"

- [x] 📃 Split presentation slides into multiple files, both Markdown (.md) and MDX files (.mdx).

- [x] ➡️ Keyboard navigation: arrow keys for previous slide and next slide

- [x] 💅 Basic CSS styling: Center content horizontally and vertically, but also left align content 😱

- [x] ⚛️ Importing components into MDX, either those from `remix-slides`, or your own components.

- [x] 🖼 Portal that shows all presentations, and preview thumbnails of presentation slides.

- [ ] 🐞 Import component once per MDX file, so all slides can use it

- [ ] 🐞 Read importable React components once, upon start of the app, instead of when navigating each slide

- [ ] 🎡 Theming by customizing CSS from the `slides` folder, perhaps with frontmatter?

- [ ] 👩‍🏫 Presentation mode: Speaker notes, navigate though slides, sync between tabs (Broadcast API or web sockets?)

- [ ] ⚙️ Deploy to a cloud provider, however, how can I make sure other people can choose their own? 🤔

- [ ] 🔁 Having content in a single slide appear step by step, before moving to the next slide

- [ ] ♻️ Nicer transition between slides

- [ ] 🔥 Inline live coding (a la CodeSandbox), which persists the changes
