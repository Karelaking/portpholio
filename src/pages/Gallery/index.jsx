import React from 'react'
import '../Gallery/style.css'
import '../../assets/source.json'
function Gallery() {
  return (
    <>
    <div id='gallery'></div>
     <h1 className='tittle' >Photo<span className='tittle_span'>Gallery</span></h1>
    <div className='gallery'>
      <img className="gridPhotos" src="https://source.unsplash.com/random/400x500/?heroin" alt="img" />
      <img className="gridPhotos" src="https://source.unsplash.com/random/400x500/?heros" alt="img" />
      <img className="gridPhotos" src="https://source.unsplash.com/random/500x400/?girls" alt="img" />
      <img className="gridPhotos" src="https://source.unsplash.com/random/400x500/?models" alt="img" />
      <img className="gridPhotos" src="https://source.unsplash.com/random/500x400/?food" alt="img" />
      <img className="gridPhotos" src="https://source.unsplash.com/random/500x400/?flowers" alt="img" />
    </div>
    </>
  )
}

export default Gallery
