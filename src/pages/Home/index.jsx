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
  )
}

export default Home
