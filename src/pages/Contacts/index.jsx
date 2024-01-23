import React from 'react'
import '../Contacts/style.css'
import Buttons from '../../components/Buttons'

function Contacts() {
  return (
    <div id='contacts'>
      <div className="contacts">
      <h1 className='tittle' >Contact<span className='tittle_span'>Us</span></h1>
      <div className="contact_box">
       
      </div>
      <div className="button_box">
<Buttons text="Get Start"/>
<Buttons text="Download CV"/>
      </div>

      </div>
    </div>
  )
}

export default Contacts
