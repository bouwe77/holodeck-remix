import type { ReactNode } from 'react'
import { useEffect, createContext, useCallback, useContext, useState, useRef } from 'react'

type VerticalAlignment = 'middle' | 'top'

const VerticalAlignmentContext = createContext<
  | {
      verticalAlignment: VerticalAlignment
      changeVerticalAlignment: (alignment: VerticalAlignment) => void
    }
  | undefined
>(undefined)

/**
 * Context for keeping track of the vertical alignment of a slide,
 * which depends on whether the Top or Middle component was used in the slide MDX.
 */
function VerticalAlignmentProvider({ children }: { children: ReactNode }) {
  const [verticalAlignment, setVerticalAlignment] = useState<VerticalAlignment>('middle')
  const alreadySet = useRef(false)

  const changeVerticalAlignment = useCallback((newVerticalAlignment: VerticalAlignment) => {
    if (alreadySet.current) return
    alreadySet.current = true
    setVerticalAlignment(newVerticalAlignment)
  }, [])

  const value = { verticalAlignment, changeVerticalAlignment }
  return <VerticalAlignmentContext.Provider value={value}>{children}</VerticalAlignmentContext.Provider>
}

const useVerticalAlignmentContext = () => {
  const context = useContext(VerticalAlignmentContext)
  if (context === undefined) {
    throw new Error('useVerticalAlignment must be used within a VerticalAlignmentProvider')
  }

  return context
}

const useChangeVerticalAlignment = (changeVerticalAlignmentTo: VerticalAlignment) => {
  const { changeVerticalAlignment } = useVerticalAlignmentContext()

  useEffect(() => {
    changeVerticalAlignment(changeVerticalAlignmentTo)
  }, [changeVerticalAlignmentTo, changeVerticalAlignment])

  return changeVerticalAlignment
}

const useCurrentVerticalAlignment = () => {
  const { verticalAlignment } = useVerticalAlignmentContext()

  return verticalAlignment
}

export { useChangeVerticalAlignment, useCurrentVerticalAlignment }

export default VerticalAlignmentProvider
