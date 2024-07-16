import React from 'react';
import '../Styles/ContactUs.css';
import ContactForms from '../UIComponents/ContactsForm';
import ContactDetails from '../UIComponents/ContactDetails';
import SocialIcons from '../UIComponents/SocialIcons';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='contact-us__header'>
        <h2 className='contact-us__title'>Get In Touch</h2>
      </div>
      <div className='contact-us__body'>
        <div className='contact-us__content-wrapper'>
            <div className='contact-us__contact-details-wrapper'>
                <div className='contact-us__contact-details-header'>
                    <h3 className='contact-us__contact-details-title'>Contact Information</h3>
                    <p className='contact-us__contact-details-sub-title'>Connect with us for delicious recipes and culinary inspiration</p>
                </div>
                <div className='contact-us__contact-details-body'>
                    <ContactDetails 
                        icon="fa-envelope"
                        title="E-Mail"
                        description="YeclaSteven85@gmail.com"
                    />
                    <ContactDetails 
                        icon="fa-phone"
                        title="Phone Number"
                        description="09217892775"
                    />
                    <ContactDetails 
                        icon="fa-house"
                        title="Address"
                        description="Mahogany 2 Cabuyao Laguna"
                    />
                    <div className='contact-us__contact-details-socials-wrapper'>
                        <SocialIcons
                            link="https://www.facebook.com/steven.yecla/" 
                            icon="fa-facebook-f"
                        />
                        <SocialIcons
                            link="https://www.instagram.com/steven_yecla/" 
                            icon="fa-instagram"
                        />
                        <SocialIcons
                            link="hhttps://x.com/home" 
                            icon="fa-twitter"
                        />
                        <SocialIcons
                            link="https://www.tiktok.com/foryou?lang=en" 
                            icon="fa-tiktok"
                        />
                    </div>
                </div>
            </div>
            <div className='contact-us__contact-form-wrapper'>
                <ContactForms />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
