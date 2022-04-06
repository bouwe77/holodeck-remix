import fs from 'fs/promises'
import Path from 'path'

export type Slide = {
  nr: number
  mdxContent: string
}

export async function getSlides(): Promise<Slide[]> {
  const mdxFiles = await fs
    .readdir(`${__dirname}/../../app/slides`, { withFileTypes: true })
    .then((files) => files.filter((file) => file.isFile() && Path.extname(file.name) === '.mdx'))

  const slidesPerFile = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = Path.join(__dirname, '../../app/slides', file.name)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return fileContents.split('---')
    }),
  )

  const allSlides = slidesPerFile
    .reduce((acc, curr) => acc.concat(curr), [])
    .map((slide, index, slides) => {
      return {
        nr: index + 1,
        mdxContent: slide,
        previousSlideNr: index === 0 ? null : index,
        nextSlideNr: index === slides.length - 1 ? null : index + 2,
      }
    })

  return allSlides
}
