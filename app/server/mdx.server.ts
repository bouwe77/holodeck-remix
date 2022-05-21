import fs from 'fs/promises'
import Path from 'path'
import { bundleMDX } from 'mdx-bundler'

const componentsFolder = Path.resolve(__dirname, '../../app/client/slides/layout')

export const getMdx = async (mdxSourceCode: string) => {
  const center = await fs.readFile(Path.join(componentsFolder, 'Center.tsx'), 'utf8')
  const left = await fs.readFile(Path.join(componentsFolder, 'Left.tsx'), 'utf8')

  const result = await bundleMDX({
    source: mdxSourceCode,
    files: {
      './Center.tsx': center,
      './Left.tsx': left,
    },
  })

  return result
}
