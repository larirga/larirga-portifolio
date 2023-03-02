import React from 'react';
import github_image from '../images/github_image.png';
import linkedin_image from '../images/linkedin_image.png';
import email_image from '../images/email_image.png';

export default function Contact() {
  return (
    <div>
      <p className='about-title'> Contact me </p>
      <div className='email-div'>
        <img className='icon-contact' src={ email_image } alt="email" />
        <p>larirgaa@gmail.com</p>
      </div>
        <p className='about-title'> Socials</p>
      <div className='div-contact'>
      <a href="https://github.com/larirga">
        <img className='icon-contact' src={ github_image } alt="github" />
        </a>
        <a href="https://github.com/larirga">
        <img className='icon-contact' src={ linkedin_image } alt="linkedin" />
        </a>
      </div>
    </div>
  )
}
