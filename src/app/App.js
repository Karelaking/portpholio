import React from 'react'
import '../app/App.css'
import Navigation_Bar from '../components/Header'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Footer from '../pages/Footer'
import Contacts from '../pages/Contacts'

function App() {
  return (
    <div>
      <Navigation_Bar/>
      <Home/>
      <About/>
      <Blog/>
      <Gallery/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
