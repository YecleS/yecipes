import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/BrowseButton.css'

const BrowseButton = ({text}) => {
  return (
    <NavLink to='/catalog'>
        <button className='browse-button'>{text}</button>
    </NavLink>
  )
}

export default BrowseButton
