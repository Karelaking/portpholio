import React from 'react'
import '../Buttons/style.css'

function Buttons(props) {
  return (
    <a className='button'>
      {props.text}
    </a>
  )
}

export default Buttons
