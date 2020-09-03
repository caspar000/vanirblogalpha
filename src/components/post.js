import React from 'react'

const Post = ({ title, date, path, id, html}) => {
  return (
    <div key={id + title}>
      <h1>{title}</h1>
      <span>{date}</span>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
}

export default Post