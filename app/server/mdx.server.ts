import fs from 'fs/promises'
import Path from 'path'
import { bundleMDX } from 'mdx-bundler'
import { sync as getFiles } from 'glob'

//TODO these folder paths are also in the getSlides, so put them somewhere central...
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
  const presentationFolder = Path.resolve(slidesFolder, presentationSlug)

  //TODO No need to read all these components with every request, so where to put this?
 
 //TODO Although ts(x) is used, TS does not work yet as soon as you use types.
 // Maybe this gives some inspiration? https://www.canrau.com/en/remix-mdx-bundler-and-images
 // Perhaps do a POC with this, could be how I bundle the files here is totally wrong...

  // Next to the MDX itself, also bundle the layout components, and every .js, .jsx, .ts., .tsx file
  // in the presentation folder.
  //TODO Make one pattern for these extensions so one call to getFiles is enough...
  const componentPaths = [
    ...getFiles(`${layoutComponentsFolder}/**/*.tsx`),
    ...getFiles(`${presentationFolder}/**/*.tsx`),
    ...getFiles(`${presentationFolder}/**/*.ts`),
    ...getFiles(`${presentationFolder}/**/*.js`),
    ...getFiles(`${presentationFolder}/**/*.jsx`),
    ...getFiles(`${presentationFolder}/**/*.json`),
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
