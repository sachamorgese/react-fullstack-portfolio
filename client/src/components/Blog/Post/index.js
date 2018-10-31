import React from 'react'
import PostEditor from '../PostEditor'
import './index.css'

export default () => {
  return (
    <div>
      <input className="title-box" />
      <PostEditor />
    </div>
  )
}