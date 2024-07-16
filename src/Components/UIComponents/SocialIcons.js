import React from 'react';
import '../Styles/SocialIcons.css';

const SocialIcons = ({link, icon}) => {
  return (
    <a href={link} target='blank' className='social-icons__link'>
        <i className={`social-icons__icon fa-brands ${icon}`}></i>
    </a>
  )
}

export default SocialIcons
