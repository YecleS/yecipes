import React from 'react';
import '../Styles/ContactDetails.css';

const ContactDetails = ({icon, title, description}) => {
  return (
    <div className='contact-details'>
      <div className='contact-details__icon-wrapper'>
        <i className={`contact-details__icon fa-solid ${icon}`}></i>
      </div>
      <div className='contact-details__information-wrapper'>
        <p className='contact-details__information-title'>{title}</p>
        <p className='contact-details__information-description'>{description}</p>
      </div>
    </div>
  )
}

export default ContactDetails
