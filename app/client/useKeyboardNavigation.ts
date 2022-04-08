import * as React from 'react'

const useKeyboardNavigation = (goToNextSlide: () => void, goToPreviousSlide: () => void) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case 'Space':
          e.preventDefault()
          goToNextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          goToPreviousSlide()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToNextSlide, goToPreviousSlide])
}

export default useKeyboardNavigation
