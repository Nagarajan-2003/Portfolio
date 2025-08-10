import React, { useState } from 'react'
import './Projectdesc.css'

const Projectdesc = ({img,title,Description,link}) => {
    const [show,setShow]=useState(false);
  return (
    <a href={link}>
        <div  onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className='project'>
            {
                show?(
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <p>{Description}</p>
                    </div>
                ):(
                    <img src={img} alt="" />
                )
            }
        </div>
    </a>
  )
}

export default Projectdesc