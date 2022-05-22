import fs from 'fs/promises'
import Path from 'path'
import { bundleMDX } from 'mdx-bundler'

const componentsFolder = Path.resolve(__dirname, '../../app/client/slides/layout')
const kutzooi = Path.resolve(__dirname, '../../slides/example-presentation')

const getComponentFilenames = async (folder: string) => {
  const files = await fs
    .readdir(folder, { withFileTypes: true })
    .then((files) => files.filter((file) => file.isFile() && Path.extname(file.name) === '.tsx'))
    .then((files) => files.map((file) => file.name))

  return files
}

const getComponentContents = async (folder: string, filenames: string[]) => {
  const stuff = await Promise.all(
    filenames.map(async (file) => {
      const filePath = Path.join(folder, file)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return {
        [`./${file}`]: fileContents,
      }
    }),
  )

  return stuff.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}

export const getMdx = async (mdxSourceCode: string) => {
  const componentFilenames = await getComponentFilenames(componentsFolder)
  const componentFilenames2 = await getComponentFilenames(kutzooi)

  // create prut object: key is componentFilenames, file contents is value
  const prut = await getComponentContents(componentsFolder, componentFilenames)
  const prut2 = await getComponentContents(kutzooi, componentFilenames2)

  const result = await bundleMDX({
    source: mdxSourceCode,
    files: {
      ...prut,
      ...prut2,
    },
  })

  return result
}
