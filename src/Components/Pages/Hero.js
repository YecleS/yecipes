import React from 'react';
import '../Styles/Hero.css';
import HeroImage from '../Assets/hero-img.png';
import Leaf1 from '../Assets/leaf1.png';
import Leaf2 from '../Assets/leaf2.png';
import BrowseButton from '../UIComponents/BrowseButton';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__content-wrapper'>
            <div className='hero__text-wrapper'>
                <p className='hero__greetings'>Welcome To Yecipes</p>
                <h1 className='hero__title'>Your Gateway to Healthy Living</h1>
                <p className='hero__subtitle'>A curated collection of vegetable-based meals recipes to feed your soul</p>
                <BrowseButton text='Browse' />
            </div>
            <div className='hero__img-wrapper'>
                <img src={HeroImage} className='hero__img'/>
                <div className='hero__img-overlay card1'>
                    <div className='hero__overlay-icon-wrapper'>
                        <i className="hero__overlay-icon fa-solid fa-bowl-food"></i>
                    </div>
                    <p className='hero__overlay-description'>Appetizing Dishes</p>
                </div>
                <div className='hero__img-overlay card3'>
                    <div className='hero__overlay-icon-wrapper'>
                        <i className="hero__overlay-icon fa-solid fa-heart-pulse"></i>
                    </div>
                    <p className='hero__overlay-description'>Healthy Ingredients</p>
                </div>
            </div>
        </div>
        <img src={Leaf1} className='hero__img-leaf leaf1'/>
        <img src={Leaf2} className='hero__img-leaf leaf2'/>   
        <img src={Leaf2} className='hero__img-leaf leaf3'/>
        <div className='hero__sub-bar-wrapper'>
            <div className='hero__sub-bar-card'>
                <i className="hero__sub-bar-card-icon fa-solid fa-leaf"></i>
                <p className='hero__sub-bar-card-description'>Vegetarian Friendly</p>
            </div>
            <div className='hero__sub-bar-card'>
                <i className="hero__sub-bar-card-icon fa-solid fa-copy"></i>
                <p className='hero__sub-bar-card-description'>Quick Recipes</p>
            </div>
            <div className='hero__sub-bar-card'>
                <i className="hero__sub-bar-card-icon fa-solid fa-egg"></i>
                <p className='hero__sub-bar-card-description'>Nutrient-Rich Dishes</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
