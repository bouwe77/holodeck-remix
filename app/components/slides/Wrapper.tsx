import type { ReactNode } from 'react'
import VerticalAlign from '~/components/slides/VerticalAlign'
import VerticalAlignmentProvider from '~/components/slides/VerticalAlign'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <VerticalAlignmentProvider>
      <VerticalAlign>{children}</VerticalAlign>
    </VerticalAlignmentProvider>
  )
}

export default Wrapper
