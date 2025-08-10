import React from 'react'
import { Element } from 'react-scroll'
import skill from '../../assets/skill.jpg'
import { LinearProgress } from '@mui/material'
import './Skill.css'
const Skill = () => {
  return (
    <Element className='skillcontainer' id="skills">
        <div className="skillcontainer__image">
            <img src={skill} alt="" />
        </div>
        <div className="skillcontainer__text">
            <h2>SKILLSET</h2>
            <div className='skillcontainer__skillset'>
                <h5>C</h5>
                <div className="skillcontainer__slider skillcontainer__slider1">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>C++</h5>
                <div className="skillcontainer__slider skillcontainer__slider2">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Python</h5>
                <div className="skillcontainer__slider skillcontainer__slider3">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Java</h5>
                <div className="skillcontainer__slider skillcontainer__slider4">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>HTML</h5>
                <div className="skillcontainer__slider skillcontainer__slider5">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>CSS</h5>
                <div className="skillcontainer__slider skillcontainer__slider6">
                    <LinearProgress variant='determinate'value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Javascript</h5>
                <div className="skillcontainer__slider skillcontainer__slider7">
                    <LinearProgress variant='determinate'value={50}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>React</h5>
                <div className="skillcontainer__slider skillcontainer__slider8">
                    <LinearProgress variant='determinate'value={50}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skill