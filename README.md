<h1 align="center">Holodeck ✴️ ❇️ ⚛️</h1>
<p align="center">Quickly create a slide deck with Markdown and MDX</p>

An app for presenting your slide decks, which you write in Markdown or MDX in your favorite IDE or editor. Built with Remix.

# Features

- Create multiple presentations within one project.
- Write your presentation by creating one or more Markdown and/or MDX files.
- Slides are separated with an `###`.
- A portal shows you an overview of all presentations and its slides.
- Start a presentation in full screen mode and navigate through slides with your keyboard.
- Slide content is aligned centered horizontally and vertically, unless you wrap it in a `<Left>content here</Left>` component.

# Installation

Clone and start the app:

```sh
git clone https://github.com/bouwe77/holodeck
cd holodeck
npm i
npm run dev
```

# Usage

## Creating your first presentation

- Open the `slides` folder.
- Create a sub folder with the name of your presentation.
- In that folder, create an .md or .mdx file, for example `slides.mdx`.
- Add some text to that file, for example `# Welcome` and save.
- Refresh the app in the browser, navigate to your presentation.
- Click the "Start Presentation" button.
- Add more slides in the same file by separating them with `###`.
- Or create another .md or .mdx file and add slides there.
- Refresh the browser every time you change something to your slides.

## Aligning slide content

For _horizontal_ aligning content there are the `Center` and `Left` components:

```
<Center>
# Centered title
</Center>

<Left>
Left aligned content
</Left>
```

_Vertically_ aligning content applies to a single (but whole) slide and is done through frontmatter:

```
---
verticalAlign: top
---

To the top!
```

By default the content is vertically aligned centered, so in practice you will only define top alignment.

## Importing modules in your slides

Imports are done per slide:

```
import Counter from './Counter'

<Counter/>

###

import stuff from './stuff'

{stuff}
```

This means that if you want to use the same module for multiple slides, you still have to import them for each slide.

# Roadmap

See [TODO.md](./TODO.md), where I keep track of and work out things I might build some day...
