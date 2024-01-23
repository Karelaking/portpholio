import React from 'react'
import '../app/App.css'
import Navigation_Bar from '../components/Header'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
<<<<<<< HEAD
import Card from '../components/Cards'
=======
>>>>>>> 8392666c2b5a617b5717009b57406438b56083d6
import Blog from '../pages/Blog'
import About from '../pages/About'
import Footer from '../pages/Footer'
import Contacts from '../pages/Contacts'

<<<<<<< HEAD

function App() {
  return (
    <div className='App'>
      <Navigation_Bar/>
      <Home/>
      <About/>
      <Card/>
      <Gallery/>
      <Blog/>
=======
function App() {
  return (
    <div>
      <Navigation_Bar/>
      <Home/>
      <About/>
      <Blog/>
      <Gallery/>
>>>>>>> 8392666c2b5a617b5717009b57406438b56083d6
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
