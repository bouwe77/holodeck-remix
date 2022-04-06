import { bundleMDX } from 'mdx-bundler'

export const getMdx = async (mdxSourceCode: string) => {
  const result = await bundleMDX({
    source: mdxSourceCode,
    // Deze files zijn dan de dingen die ik aanbied en je in je slides.mdx zou kunnen importeren
    //     files: {
    //       './demo.tsx': `
    // import * as React from 'react'

    // function Demo() {
    //   return <div>Neat demo!</div>
    // }

    // export default Demo
    //     `,
    //     },
  })

  return result
}
