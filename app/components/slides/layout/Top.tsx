import React from 'react'
import { useChangeVerticalAlignment } from '../VerticalAlignmentContext'

export default function Top({ children }) {
  useChangeVerticalAlignment('top')

  if (!children) return null
  return <>{children}</>
}
