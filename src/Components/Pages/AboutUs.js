import React from 'react';
import '../Styles/AboutUs.css';



const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us__header'>
        <h2 className='about-us__title'>About Us</h2>
      </div>
      <div className='about-us__body'>
            <div className='about-us__content-wrapper'>
                <div className='about-us__description-wrapper'>
                    <p className='about-us__description'>Welcome to Yecipes, your ultimate catalog for vegetarian and healthy living recipes. We are dedicated to providing you with a wide variety of nutrient-rich and quick-to-prepare meals that cater to a wholesome lifestyle. Discover delicious and easy-to-make dishes that nourish your body and delight your taste buds. Join us in embracing a healthier way of eating with Yecipes!</p>
                </div>
                <div className='about-us__card-wrapper'>
                    <p className='about-us__card-title'>The Contents Of Our Catalog</p>
                    <p className='about-us__card-subtitle'>What We Have</p>
                    <div className='about-us__cards'>
                        <div className='about-us__card'>
                            <i className="about-us__card-icon fa-solid fa-leaf"></i>
                            <p className='about-us__card-description'>Vegetarian Friendly</p>
                        </div>
                        <div className='about-us__card'>
                            <i className="about-us__card-icon fa-solid fa-copy"></i>
                            <p className='about-us__card-description'>Quick Recipes</p>
                        </div>
                        <div className='about-us__card'>
                            <i className="about-us__card-icon fa-solid fa-egg"></i>
                            <p className='about-us__card-description'>Nutrient-Rich Dishes</p>
                        </div>
                    </div>
                </div>
            </div>      
      </div>
    </div>
  )
}

export default AboutUs
