import React from 'react' 
import '../About/style.css'
import Buttons from '../../components/Buttons'

function About() {
  return (
    <div id='about' className='about'>
      <h1 className='tittle'>About <sapn className='tittle_span'>Me</sapn></h1>
      <Buttons text='Read More'/>
    </div>
  )
}

export default About
