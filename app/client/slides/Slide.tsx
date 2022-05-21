import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export function Slide({ code }: { code: string }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="container">
      <Component />
    </div>
  )
}
