import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className="topcontent__container">
            <h1>Nagarajan.M</h1>
            <p>A professional C,C++ and Python Developer</p>
            <a href='https://drive.google.com/file/d/1c-8Cf31msAPUJyGnMmXx7tgUJZSRfOQM/view?usp=drive_link'>
                <button className='topcontent__downloadbutton'>Download RESUME</button>
            </a>
            <Link to='projects'smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
