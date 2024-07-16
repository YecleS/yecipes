import React from 'react';
import '../Styles/DishInfo.css';
import { useLocation } from 'react-router-dom';
import BrowseButton from './BrowseButton';

const DishInfo = () => {
    const location = useLocation();
    const { image, name, description, ingredients, process } = location.state;

  return (
    <div className='dishInfo'>
        <div className='dishInfo__content-wrapper'>
            <div className='dishInfo__img-wrapper'>
                <img src={image} className='dishInfo__dish-img'/>
            </div>
            <div className='dishInfo__details-wrapper'>
                <div className='dishInfo__details-sub-wrapper'>
                    <p className='dishInfo__dish-name'>{name}</p>
                </div>
                <div className='dishInfo__details-sub-wrapper'>
                    <p className='dishInfo__details-title'>Description:</p>
                    <p className='dishInfo__dish-details'>{description}</p>
                </div>
                <div className='dishInfo__details-sub-wrapper'>
                    <p className='dishInfo__details-title'>Ingredients:</p>
                    {ingredients.map((ingredients, index) =>(
                        <p className='dishInfo__dish-details' key={index}>{ingredients}</p>
                    ))}
                </div>
                <div className='dishInfo__details-sub-wrapper'>
                    <p className='dishInfo__details-title'>Process:</p>
                    <p className='dishInfo__dish-details'>{process}</p>
                </div>
                <BrowseButton text='Continue Browsing'/>
            </div>             
        </div>
           
    </div>
  )
}

export default DishInfo
