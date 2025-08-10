import React from 'react'
import './Experiencebox.css'
const Experiencebox = ({number,title,style}) => {
  return (
    <div style={{...style}} className='experience-box'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default Experiencebox