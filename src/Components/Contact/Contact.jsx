import { LinkedIn,GitHub,MailOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email:<span>nagarajanmnagarajan77@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@Nagarajan-2003</span>
            </p>
            <div className="contact_icons">
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                    <IconButton>
                        <MailOutline/>
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/nagarajan-m-74110a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href="https://github.com/Nagarajan-2003">
                    <IconButton>
                        <GitHub/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact