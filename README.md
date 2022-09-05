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

There are 3 ways to use modules in your slides. Pick the one that suits your needs, or even combine all 3 ways for ultimate flexibility.

### 1. Automatic imports

In the presentation folder, all `.ts`, `.tsx`, `.js`, and `.jsx` modules are automatically imported, so they can be used in every slide.
However, only _default exports_ from these files are imported.

For example, the `slides` folder contains `"my presentation"` with `slides.mdx` containing your slides, and some TypeScript files:

```
/slides
   /my presentation
      calc.ts
      MyComponent.tsx
      slides.mdx
```

In `slides.mdx` you can now use the default exports from `calc.ts` and `MyComponent.tsx`:

```
# My first slide

{calc.add(1, 2)}

<MyComponent />
```

Which will render:

---

**My First Slide**

3

Hello from My Component

---

What happens under the hood is for every file in the folder, except for .md and .mdx, default imports are done:

```
import calc from './calc'
import MyComponent from './MyComponent'
```

Note the name of the import is always the same as the file.

If you need more control, for example named imports, or specific imports per slide, you can also import in the slides MDX:

### 2. Manually importing per slide

You can import specific modules per slide:

```
import Counter from './Counter'

<Counter/>

---

import Counter, { stuff } from './stuff'

{stuff}

<Counter />
```

The benefit of importing like this is that it's very explicit, and it might be necessary if you want to import the same name from different modules, as you see in the example.

### 3. Manually importing for all slides

You can also import manually, and then use the imported things in every slide of your presentation.

In your MDS you need to add an empty slide, only containing imports. These imports will then be applied to every slide, but the empty slide containing the imports will not make it in the actual presentation, as it's just an import placeholder.

In this example you see a slide only containing a few imports, and other slides using the imported things:

```
import { random } from './utils'
import Counter, ImprovedCounter from './Counters'

---

This is a Counter:

<Counter />

---

This counter is better:

<ImprovedCounter number={random()} />

---

Here they are together:

<Counter />
<ImprovedCounter number={42} />
```

This will result in a presentation with 3 slides where the imported stuff at the top is used everywhere, because they are imported in every slide.

# Roadmap

See [TODO.md](./TODO.md), where I keep track of and work out things I might build some day...
