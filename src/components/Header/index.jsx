import React from 'react'
import '../Header/style.css'

function Navigation_Bar() {

  return (
    <div className='navigation_Bar'>

      <h1 className='logo_name'>White Angel</h1>

      <ul className='list'>
        <li className='list_item'><a href="#home">Home</a></li>
        <li className='list_item'><a href="#about">About</a></li>
        <li className='list_item'><a href="#projects">Projects</a></li>
        <li className='list_item'><a href="#gallery">Gallery</a></li>
        <li className='list_item'><a href="#blog">Blog</a></li>
        <li className='list_item'><a href="#contacts">Contacts</a></li>
        <li className='list_item'><a href="#feedback">Feedback</a></li>
      </ul>
      
      <button className='menu_button'>menu</button>
    </div>
  )
}

export default Navigation_Bar
