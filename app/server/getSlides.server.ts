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
  return fs
    .readdir(folder, { withFileTypes: true })
    .then((files) => files.filter((file) => file.isFile() && extensions.includes(Path.extname(file.name))))
}

export async function getSlides(presentationSlug: string): Promise<Slide[]> {
  const presentationFolder = Path.join(slidesFolder, presentationSlug)

  // Generate default imports for .ts, .tsx, .js, .jsx, .json file
  //TODO subfolders
  const fileExtensionsToImport = ['.js', '.jsx', '.ts', '.tsx', '.json']
  const layoutFilesToImport = await getFilesByExtensions(layoutComponentsFolder, fileExtensionsToImport)
  const presentationFilesToImport = await getFilesByExtensions(presentationFolder, fileExtensionsToImport)
  const filesToImport = [...layoutFilesToImport, ...presentationFilesToImport]
  const defaultImports = filesToImport
    .map((f) => {
      const parsedFilename = Path.parse(f.name)
      const module = parsedFilename.ext === '.json' ? parsedFilename.base : parsedFilename.name
      return `import ${parsedFilename.name} from './${module}'`
    })
    .join('\n')

  const mdxFiles = await getFilesByExtensions(presentationFolder, ['.mdx', '.md'])

  const slidesPerFile = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = Path.join(presentationFolder, file.name)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return fileContents.split('###')
    }),
  )

  const allSlides = slidesPerFile
    .reduce((acc, curr) => [...acc, ...curr])
    .map((slide, index, slides) => {
      return {
        nr: index + 1,
        //TODO add imports AFTER the frontmatter
        mdxContent: defaultImports + '\n\n' + slide.trim(),
        previousSlideNr: index === 0 ? null : index,
        nextSlideNr: index === slides.length - 1 ? null : index + 2,
      }
    })

  return allSlides
}
