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
// const layoutComponentsFolder = Path.resolve(__dirname, '../app/components/slides/layout')

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

// TODO Make this dynamic by default importing every .tsx from the layouts folder?
// If so, then also move that loic out of here, because it only needs to be done once, and not per MD/MDX file.
const layoutImports = ["import Top from './Top'", "import Center from './Center'", "import Left from './Left'"]
  .join('\n')
  .concat('\n\n')

const getPresentationImports = (content: string) => {
  const lines = content.split('\n')

  const imports = []

  // Gather all imports from the first lines of the content, until something else than an import is found.
  for (const line of lines) {
    const trimmedLine = line.trim()
    if (trimmedLine.startsWith('import ')) imports.push(line)
    else if (trimmedLine !== '') break
  }

  return imports.join('\n').concat('\n\n')
}

export async function getSlides(presentationSlug: string): Promise<Slide[]> {
  const presentationFolderPath = Path.join(slidesFolder, presentationSlug)
  const mdAndMdxFilePaths = await getFilesByExtensions(presentationFolderPath, ['.md', '.mdx'])
  const mdAndMdxFileContents = await Promise.all(mdAndMdxFilePaths.map(async (path) => await getFileContents(path)))

  const allSlidesContentAndMetadata = mdAndMdxFileContents
    .map((fileContents) => {
      const splittedSlideContent = fileContents.split('---').map((s) => s.trim())

      const presentationImports = getPresentationImports(splittedSlideContent[0])
      return splittedSlideContent.map((slideContent, index) =>
        index === 0 ? layoutImports + slideContent : layoutImports + presentationImports + slideContent,
      )
    })
    .reduce((acc, curr) => [...acc, ...curr])
    .map((slideContent, index, slides) => {
      return {
        nr: index + 1,
        mdxContent: slideContent,
        previousSlideNr: index === 0 ? null : index,
        nextSlideNr: index === slides.length - 1 ? null : index + 2,
      }
    })

  return allSlidesContentAndMetadata
}
