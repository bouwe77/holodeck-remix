import type { ReactNode } from 'react'
import { useCurrentVerticalAlignment } from './VerticalAlignmentContext'

/**
 * Styles for vertically aligning the children to the top.
 */
const VerticalAlignTop = ({ children }: { children: ReactNode }) => {
  return <div className="top">{children}</div>
}

/**
 * Styles for vertically aligning the children to the center.
 */
const VerticalAlignCenter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <div className="center">
        <div className="center-content">{children}</div>
      </div>
    </div>
  )
}

/**
 * Conditionally renders the component that takes care of the current vertical alignment.
 */
const VerticalAlign = ({ children }: { children: ReactNode }) => {
  const verticalAlignment = useCurrentVerticalAlignment()

  return (
    <>
      {verticalAlignment === 'top' ? (
        <VerticalAlignTop>{children}</VerticalAlignTop>
      ) : (
        <VerticalAlignCenter>{children}</VerticalAlignCenter>
      )}
    </>
  )
}

export default VerticalAlign
