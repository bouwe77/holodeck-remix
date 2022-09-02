/**
 * - Ik ga alle imports bovenin de MDX globaal maken, dus aan elke slide toevoegen.
 * - Imports elders in de MDX, dus in specifieke slides, laat ik staan. Als dat misgaan dan
 *   moeten ze dat zelf maar oplossen, want imports per slide is raar. Als het toevallig wel
 *   werkt (niet conflicteert) dan is dat mooi meegenomen.
 *
 * - Bij inlezen van een MDX file:
 *   1. Begint de file met een import?
 *   2. Zo nee, voeg nergens imports toe.
 *   3. Zo ja, vanaf de eerste import tot de laatste, dus totdat je een regel met iets anders
 *      dan imports tegenkomt: Onthoud deze en zet ze bovenaan ELKE slide.
 *
 *   Andere requirements:
 *   - MDX zo clean mogelijk houden.
 *   - MDX zoveel mogelijk gebruiken zoals het hoort, zodat het geldige MDX is.
 *   - Frontmatter: Moet helemaal bovenaan de MDX staan, nog voor imports en content. Dus dat doe ik nu fout.
 *   - Kortom, misschien toch maar vertical alignment in JSX oplossen...
 */

import fs from 'fs/promises'
import Path from 'path'

export type Slide = {
  nr: number
  mdxContent: string
}

export type Presentation = {
  slug: string
}

const slidesFolder = Path.resolve(__dirname, '../slides')
const layoutComponentsFolder = Path.resolve(__dirname, '../app/components/slides/layout')

export async function getPresentations(): Promise<Presentation[]> {
  const files = await fs.readdir(slidesFolder)
  const presentations = files.map((file) => ({
    slug: file,
  }))
  return presentations
}

const getFilesByExtensions = async (folder: string, extensions: string[]) => {
  const filesInFolder = await fs.readdir(folder, { withFileTypes: true })

  const filesWithExtensions = filesInFolder
    .filter((file) => file.isFile() && extensions.includes(Path.extname(file.name)))
    .map((file) => Path.join(folder, file.name))

  return filesWithExtensions
}

const getFileContents = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf8')
  return fileContents
}

export async function getSlides(presentationSlug: string): Promise<Slide[]> {
  const presentationFolderPath = Path.join(slidesFolder, presentationSlug)
  const mdAndMdxFilePaths = await getFilesByExtensions(presentationFolderPath, ['.md', '.mdx'])

  const allSlidesContent = await Promise.all(
    mdAndMdxFilePaths.map(async (file) => {
      const fileContents = await getFileContents(file)
      return fileContents.split('###')
    }),
  ).then((stuff) => stuff.reduce((acc, curr) => [...acc, ...curr]))

  const defaultImports = '{/* todo... */}'

  const allSlidesContentAndMetadata = allSlidesContent.map((slide, index, slides) => {
    return {
      nr: index + 1,
      //TODO add imports AFTER the frontmatter
      mdxContent: defaultImports + '\n\n' + slide.trim(),
      previousSlideNr: index === 0 ? null : index,
      nextSlideNr: index === slides.length - 1 ? null : index + 2,
    }
  })

  return allSlidesContentAndMetadata
}
