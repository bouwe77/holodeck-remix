import fs from 'fs/promises'
import Path from 'path'
import { bundleMDX } from 'mdx-bundler'

const componentsFolder = Path.resolve(__dirname, '../../app/client/slides/layout')
const kutzooi = Path.resolve(__dirname, '../../slides/example-presentation')

export const getMdx = async (mdxSourceCode: string) => {
  const center = await fs.readFile(Path.join(componentsFolder, 'Center.tsx'), 'utf8')
  const left = await fs.readFile(Path.join(componentsFolder, 'Left.tsx'), 'utf8')
  const counter = await fs.readFile(Path.join(kutzooi, 'Counter.tsx'), 'utf8')

  const result = await bundleMDX({
    source: mdxSourceCode,
    files: {
      './Center.tsx': center,
      './Left.tsx': left,
      './Counter.tsx': counter,
    },
  })

  return result
}
