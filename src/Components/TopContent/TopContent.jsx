import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
<<<<<<< HEAD
// Replace with the path to your red shirt image (image_4.png)
import profilePic from '../../assets/portfolio.jpeg' 

const TopContent = () => {
  return (
    <div className='topcontent'>
        {/* The profile image stays directly inside .topcontent */}
        <img src={profilePic} alt="Nagarajan M" className='profile-img' />
        
        {/* Group all text elements in this new div for proper alignment */}
        <div className="topcontent__text-group">
            <h1>Nagarajan.M</h1>
            <h3>Software Developer</h3> {/* Added the job title */}
            <p>
                A professional C, C++ and Python Developer passionate about creating 
                efficient and innovative solutions. I specialize in building robust 
                applications and bringing ideas to life through code.
            </p>
            
            <div className="topcontent__buttons">
                <a href="https://drive.google.com/uc?export=download&id=1cQ2u_e0QmReh3xdt22vRYeOgllKvuKJJ" download="Nagarajan_M_Resume.pdf">
                    <button className='topcontent__downloadbutton'>Download RESUME</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='topcontent__workbutton'>My Work</button>
                </Link>
            </div>
        </div>
    </div>
)
=======
const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className="topcontent__container">
            <h1>Nagarajan.M</h1>
            <p>A professional C,C++ and Python Developer</p>
            <a href='https://drive.google.com/file/d/17XF2lxSi4OrOoN8rwVmGv_cFxb8HRsqt/view'>
                <button className='topcontent__downloadbutton'>Download RESUME</button>
            </a>
            <Link to='projects'smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
            </Link>
        </div>
    </div>
  )
>>>>>>> be0bb5a94a0239a476e6ad77ce0f586333c0846f
}

export default TopContent