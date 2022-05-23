import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Center from './layout/Center'

export function Slide({ code }: { code: string }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <Center>
      <Component />
    </Center>
  )
}
