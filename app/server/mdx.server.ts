import fs from 'fs/promises'
import Path from 'path'
import { bundleMDX } from 'mdx-bundler'
import { sync as getFiles } from 'glob'

const layoutComponentsFolder = Path.resolve(__dirname, '../app/components/slides/layout')
const slidesFolder = Path.resolve(__dirname, '../slides')

const getComponentContents = async (filePaths: string[]) => {
  // Read file contents of all filePaths.
  const componentContents = await Promise.all(
    filePaths.map(async (filePath) => {
      const fileContents = await fs.readFile(filePath, 'utf8')
      const componentName = `./${Path.basename(filePath, '.tsx')}`
      return {
        componentName,
        fileContents,
      }
    }),
  )

  // Create an object where the .tsx filename is the key and its file contents the value.
  const components = componentContents.reduce((acc, { componentName, fileContents }) => {
    acc[componentName] = fileContents
    return acc
  }, {} as { [key: string]: string })

  return components
}

export const getMdx = async (presentationSlug: string, mdxSourceCode: string) => {
  //TODO No need to read all these components with every request, so where to put this?
  const presentationFolder = Path.resolve(slidesFolder, presentationSlug)
  const componentPaths = [
    ...getFiles(`${layoutComponentsFolder}/**/*.tsx`),
    ...getFiles(`${presentationFolder}/**/*.tsx`),
  ]
  const components = await getComponentContents(componentPaths)

  const bundledMdx = await bundleMDX({
    source: mdxSourceCode,
    files: {
      ...components,
    },
  })

  return bundledMdx
}
