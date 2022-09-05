<h1 align="center">Holodeck ✴️ ❇️ ⚛️</h1>
<p align="center">Quickly create a slide deck with Markdown and MDX</p>

An app for presenting your slide decks, which you write in Markdown or MDX in your favorite IDE or editor. Built with Remix.

# Features

- Create multiple presentations within one project.
- Write your presentation by creating one or more Markdown and/or MDX files.
- Slides are separated with an `---`.
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
- Add more slides in the same file by separating them with `---`.
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

For _vertically_ aligning content use the `Top` or `Middle` components:

```
Middle is default

---

<Top />

But this one is going to the top!
```

You can also render the content as a child of these components, but the effect is the same:

```
<Top>
But this one is going to the top!
</Top>
```

If you use both of these components in the same slide, the first one takes presedence:

```
<Top />
<Middle />
But this one is <i>still</i> going to the top!
```

By default, the content is vertically aligned to the middle, so in practice you will only define top alignment.

## Importing modules in your slides

Modules can only be imported and/or used in `.mdx` presentation files.

There are 2 ways to import modules in your slides, which you can also combine:

### 1. Imports at the top of the MDX

In this MDX, the imports are at the top of the file, meaning they will be available for all slides:

```
import { data } from './my-data.json'
import Counter from './Counter'

# Check this out: A counter component!

<Counter />

---

# Second slide

Their name is: {data.people[3].name}

And here is the cool component again:

<Counter />

```

### 2. Manually importing per slide

You can import specific modules per slide:

```
import Counter from './Counter'

<Counter/>

---

import { stuff } from './stuff'

{stuff}

<Counter />
```

# Roadmap

See [TODO.md](./TODO.md), where I keep track of and work out things I might build some day...
