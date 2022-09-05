import React from 'react'
import { useChangeVerticalAlignment } from '../VerticalAlignmentContext'

export default function Middle({ children }) {
  useChangeVerticalAlignment('middle')

  if (!children) return null
  return <>{children}</>
}
