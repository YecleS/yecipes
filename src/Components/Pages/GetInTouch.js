import React from 'react';
import '../Styles/GetInTouch.css';
import ContactsForm from '../UIComponents/ContactsForm';

const GetInTouch = () => {
  return (
    <section className='get-in-touch'>
        <div className='get-in-touch__content-wrapper'>
            <div className='get-in-touch__header'>
                <h2 className='get-in-touch__title'>Get In Touch With Us</h2>
                <p className='get-in-touch__subtitle'>Reach Out To Us</p>
            </div>
            <div className='get-in-touch__body'>
              <ContactsForm />
            </div>
        </div>
    </section>
  )
}

export default GetInTouch
