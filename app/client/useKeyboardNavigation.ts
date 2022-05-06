import * as React from 'react'

const goToNextKeys = ['ArrowRight', 'ArrowDown', 'PageDown', 'Space']
const goToPreviousKeys = ['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace']

const useKeyboardNavigation = (goToNextSlide: () => void, goToPreviousSlide: () => void) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (goToNextKeys.includes(e.key)) {
        e.preventDefault()
        goToNextSlide()
      } else if (goToPreviousKeys.includes(e.key)) {
        e.preventDefault()
        goToPreviousSlide()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToNextSlide, goToPreviousSlide])
}

export default useKeyboardNavigation
