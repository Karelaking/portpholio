import React from 'react'
import '../../pages/Blog/style.css'
import BlogComponent from '../../components/BlogComponent'

function Blog() {
  return (
    <>
    <div id='blog'></div>
      <h1 className='tittle'>Read<span className='tittle_span'>More</span></h1>
      <div className='blog'>
        <BlogComponent size="400x500"/>
        <BlogComponent size="400x600"/>
        <BlogComponent size="500x500"/>
        <BlogComponent size="600x500"/>
        <BlogComponent size="600x700"/>
        <BlogComponent size="400x500"/>
      </div>
    </>
  )
}

export default Blog
