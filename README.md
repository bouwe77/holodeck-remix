# Slidexx

An app for presenting your slide decks, which you write in Markdown or MDX in your favorite IDE or editor. Built with Remix.

# Features

- Create multiple presentations within one project.
- Write your presentation by creating one or more Markdown and/or MDX files.
- Slides are separated with an `---`.
- A portal shows you an overview of all presentations and its slides.
- Start a presentation in full screen mode and navigate through slides with your keyboard.
- Slide content is aligned centered horizontally and vertically, unless you wrap it in a `<Left>content here</Left>` component.

# Usage

Clone and start the app:

```sh
git clone https://github.com/bouwe77/slidexx
cd slidexx
npm run dev
```

Create your first presentation:

- Open the `slides` folder.
- Create a sub folder with the name of your presentation.
- In that folder, create a .md or .mdx file, for example `slides.mdx`.
- Add some text to that file, for example `# Welcome` and save.
- Refresh the app in the browser, navigate to your presentation.
- Click the "Start Presentation" button.
- Add more slides in the same file by separating them with `---`.
- Or create another .md or .mdx file and add slides there.
- Refresh the browser evey time you change something to your slides.

# Roadmap

See [TODO.md](./TODO.md), where I keep track of and work out things I might build some day...
