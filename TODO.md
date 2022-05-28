## TO DO 🔜

This is a list of all the ideas I have to further improve and expand this project:

### Next Up

- [ ] 📵 Remove Netlify deployment setup from app code

- [ ] 🚸 Portal better navigation / routing

- [ ] 🆒 Figure out a name for this project and repository. Perhaps a Tamarian word again?

- [ ] 🈁 Better layouts: All the children of a slide should be separate grid rows which have the height of their content. Then the `Center` and `Left` component only simply align the content, so you can use them everywhere, even as children.

- [ ] 🔂 Only import presentation specific components, by passing the presentation name to the `getMdx` function.

### Should Have

- [ ] 🔁 Nicer transition between slides

- [ ] 🔃 Having content in a single slide appear step by step. Possible solution: Wrap things in an `Appear` component, and then all the children appear one by one, before moving to the next slide. Not sure yet what "appear" technically means: Hide with CSS or (not) rendering them?

- [ ] ♻️ Auto refresh hot reload mode: For example by providing a `?reload=1` query param. In that case, the app will reload every 2 seconds. The reason is Remix does not see changes to the slides files. Applies both to portal and fullscreen slide.

- [ ] 🔌 Sync tabs active slide with web sockets. Which means you could even use your mobile as a remote control, by creating a route that asks you for the ID of the presentation and then gives you a navigation component? Is the channel/room id something you'd define in the frontmatter? To define/determine the ID, and share this between the Socket and Remix code, perhaps have a central function they both call?

- [ ] ⚙️ How to add or replace the cloud provider setup? So when I choose Heroku, should I push that? And if I do, can people then still run it locally, when they don't have or don't care for Heroku, or do they need to eject first? 🤔

- [ ] 🌍 Add content for the presentation to display on the portal. Possible solution: Add an MDX file with a filename starting with underscore, so the portal displays this, and the presentation ignores it.

- [ ] ⌗ Create `Columns` layout component which puts each child in a separate grid column.

- [ ] 👩‍🏫 Speaker notes with `Notes` component which is only rendered in the portal. Perhaps the notes should be removed from the MDX when concateting/splitting slides, but in such a way they can be rendered in the portal.

- [ ] 💿 Make use of Remix' `CatchBoundary` and `ErrorBoundary` everywhere.

- [ ] 🤳 Navigation for small/mobile screens, because you have no keyboard: Show navigation bar position absolute over slide. And/or making the outer left and right parts of the slide clickable/tappable.

- [ ] 🔥 Inline live coding (a la CodeSandbox), which persists the changes. Perhaps even an iframe is fine.

- [ ] 📦 Now you have to do imports in every file, because the slides are splitted, and each slide needs to have all imports. It would be nice to do all the imports once at the top of the MDX and then append these imports to all splitted slide strings, so it just works everwhere, whatever you do (or do not) import. I don't want to parse the MDX string to see which imports I need, it's all or nothing. Unless importing potentially unused things is a problem for MDX-Bundler. Specific imports per slide should also keep on working, so it's just appending. This could result in duplicate imports. If this isn't giving any errors, I am fine with this.

- [ ] 🎡 Theming by customizing CSS from the `slides` folder. Perhaps just add CSS file(s) to your presentation folder, which get noticed by the app, included in the links of the route, and then can override CSS classes defined in the default CSS?

- [ ] 📸 How to add and render images in a presentation, other than with full URLs like I do now?

### Could Have

- [ ] ⌨️ CLI command to quickly create a presentation and an MD or MDX file.

- [ ] 🏎 Remix' prefetch intent thingy: So preload the next slide, before actually navigating to it.

- [ ] 🐞 Read importable React components once, upon start of the app, instead of every time when navigating each slide. Or is this really necessary and/or not a problem?

- [ ] 📱 Swipe to go to next/prev slide on mobile

### Improvements May 2022 (DONE ✅)

...

### Prototype May 2022 (DONE ✅)

- [x] 🗂 Put MDX files in a separate folder, with sub folder for each presentation

- [x] 📄 Rendering both MD and MDX: Split on "---"

- [x] 📃 Split presentation slides into multiple files, both Markdown (.md) and MDX files (.mdx).

- [x] ➡️ Keyboard navigation: arrow keys for previous slide and next slide

- [x] 💅 Basic CSS styling: Center content horizontally and vertically, but also left align content 😱

- [x] ⚛️ Importing components into MDX, either those from `slidexx`, or your own components.

- [x] 🖼 Portal that shows all presentations, and preview thumbnails of presentation slides.
