# Remix-Slides

My attempt to build a slide deck app with MDX with Remix.

# Requirements & Fuctionality

MDX for writing slides

- Putting one or more MDX files in a folder is enough for the app to show the presentation slides.
- Separate slides with "---". Concatenate all files in a folder ordered by filename.
- Multiple presentations by placing them in their own folder.
- Remix supports MDX out of the box, would that be an option, or not? https://remix.run/docs/en/v1/guides/mdx

Keyboard navigation

- Navigate to next slide with spacebar or right arrow.
- Navigate to previous slide with backspace or left arrow.

Theming and styling

- Create some "styled" components for aligning and positioning.
- Themable (borrow themes from MDX-Deck?).

Modes (see MDX-Deck)

- Presentation Mode ()
- Overview Mode
- Grid Mode
- Sync between tabs and windows, so you can have the presentation on one screen and the

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
