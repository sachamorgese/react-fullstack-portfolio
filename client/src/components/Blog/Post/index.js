import React from 'react'
import PostEditor from '../PostEditor'
import './Post.Module.scss'

export default () => {
  return (
    <>
      <input
        placeholder="Title"
        className="title-box" />
      <PostEditor />
    </>
  )
}