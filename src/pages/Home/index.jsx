<<<<<<< HEAD
import React, { useState } from 'react'
import '../Home/style.css'
import Buttons from '../../components/Buttons'


function Home() {

  return (
    <header className='home' id='home'>
      <div className="box">
        <div className="text_box">
          <p>Hey There 👋 I'm</p>
          <h1 className='name-tittle'>White Angel</h1>
          <p>I am a <span>Web Develooper</span></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam nostrum, pariatur voluptatum inventore, veritatis aut asperiores ut architecto cumque alias! Modi esse maxime nesciunt eaque obcaecati neque facere aliquid.</p>
          <div className="btton_frame">
            <Buttons text="Let's Start" />
            <Buttons text="Download CV" />
          </div>
        </div>

        <div className="text_box">
          <p>Hey There 👋 I'm</p>
          <h1 className='name-tittle'>White Angel</h1>
          <p>I am a <span>Web Develooper</span></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam nostrum, pariatur voluptatum inventore, veritatis aut asperiores ut architecto cumque alias! Modi esse maxime nesciunt eaque obcaecati neque facere aliquid.</p>
          <div className="btton_frame">
            <Buttons text="Let's Start" />
            <Buttons text="Download CV" />
          </div>
        </div>
      </div>
    </header>
=======
import React from 'react' 
import '../Home/style.css'
import Buttons from '../../components/Buttons'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="text_box">
      <p>Hey There 👋 I'm</p>
        <h1>White Angel</h1>
        <p>I am a <span>Web Develooper</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam nostrum, pariatur voluptatum inventore, veritatis aut asperiores ut architecto cumque alias! Modi esse maxime nesciunt eaque obcaecati neque facere aliquid.</p>
      <div className="btton_frame">
      </div>
        <Buttons text="Let's Start"/>
        <Buttons text="Download CV"/>
      </div>
          </div>
>>>>>>> 8392666c2b5a617b5717009b57406438b56083d6
  )
}

export default Home
