import React from 'react' 
import '../BlogComponent/style.css'

function BlogComponent(props) {
  return (
    <div className='component'>
      <img src={'https://source.unsplash.com/random/ '+props.size+'/?news'} alt="img" className='blog_img' />
      <div className='content_info'>
        <h1 className='blog_tittle'>Blog Tittle</h1>
        <p className='discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum possimus velit natus adipisci aut eum, voluptas magnam incidunt vel quae! Possimus excepturi inventore enim cupiditate, sed sint dolorem minima a? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nesciunt sint qui rerum expedita debitis optio, dolorum quisquam iusto veritatis error perferendis rem laboriosam quam explicabo itaque reprehenderit, ullam modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam ratione laudantium obcaecati nesciunt illum totam soluta, explicabo minus perferendis tempore, iste ducimus. Id iusto ipsa omnis reiciendis nemo dolores.</p>
      </div>
    </div>
  )
}

export default BlogComponent
