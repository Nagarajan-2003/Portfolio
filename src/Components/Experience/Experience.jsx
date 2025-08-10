import React from 'react'
import { Element } from 'react-scroll'
import Experiencebox from './../Experiencebox/Experiencebox' // <== Need to import this component
import './Experience.css'

const Experience = () => {
  return (
    <Element className="experiencecontainer" id="exp">
        <h1>Experience</h1>
        <div className='experiencecontainer__info'>
            <Experiencebox number="8+" title="Projects"/>
            <Experiencebox number="8+" title="Skills" style={{backgroundColor:'#f64c08'}}/>
            <Experiencebox number="5+" title="Programming Languages" style={{textAlign:'center'}}/>
            <Experiencebox number="3+" title="Front-End Technologies "style={{textAlign:"center"}}/>
        </div>
    </Element>
  )
}

export default Experience