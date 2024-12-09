import React from 'react'
import { useDynamicTitle } from '../hooks'

const PageNotFound = (title) => {
  useDynamicTitle(title)
  return (
    <div>PageNotFound</div>
  )
}

export default PageNotFound