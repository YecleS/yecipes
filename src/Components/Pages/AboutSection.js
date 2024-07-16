import React from 'react';
import '../Styles/AboutSection.css';
import AboutFoodImg1 from '../Assets/about-food1.jpg';
import AboutFoodImg2 from '../Assets/about-food2.jpg';
import AboutFoodImg3 from '../Assets/about-food3.jpg';
import BrowseButton from '../UIComponents/BrowseButton';

const AboutSection = () => {
  return (
    <section className='about-section'>
        <div className='about-section__content-wrapper'>
            <div className='about-section__body'>
                <div className='about-section__text-content-wrapper'>
                    <div className='about-section__text-content-title-wrapper'>
                        <h2 className='about-section__title'>About Us</h2>
                        <p className='about-section__subtitle'>Get To Know Us</p>
                    </div>
                    <div className='about-section__text-content-body-wrapper'>
                        <p className='about-section__text-body'>Welcome to Yecipes, your ultimate catalog for vegetarian and healthy living recipes. We are dedicated to providing you with a wide variety of nutrient-rich and quick-to-prepare meals that cater to a wholesome lifestyle. Discover delicious and easy-to-make dishes that nourish your body and delight your taste buds. Join us in embracing a healthier way of eating with Yecipes!</p>
                        <BrowseButton text='See Catalog' />
                    </div>
                </div>
                <div className='about-section__content-img-wrapper'>
                    <div className='about-section__img-wrapper wrapper1'>
                        <img src={AboutFoodImg1} className='about-section__img' alt='About Food 1'></img>
                    </div>
                    <div className='about-section__img-wrapper wrapper2'>
                        <img src={AboutFoodImg2} className='about-section__img' alt='About Food 2'></img>  
                    </div>
                    <div className='about-section__img-wrapper wrapper3'>
                        <img src={AboutFoodImg3} className='about-section__img' alt='About Food 3'></img> 
                    </div>                                          
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutSection
