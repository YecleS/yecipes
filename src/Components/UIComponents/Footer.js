import React from 'react';
import '../Styles/Footer.css';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__content-wrapper'>
            <div className='footer__header'>
                <h3 className='footer__logo'>Yecipes.</h3>
            </div>
            <div className='footer__body'>
                <div className='footer__socials-wrapper'>
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
    </div>
  )
}

export default Footer
