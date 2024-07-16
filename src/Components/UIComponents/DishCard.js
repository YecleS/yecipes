import React, { useState } from 'react';
import '../Styles/DishCard.css';
import { useNavigate } from 'react-router-dom';

const DishCard = ({image, name, description, ingredients, process}) => {
  const navigate = useNavigate();

  const navigateDishInfo = () => {
    navigate("/dish-info", {state: {image, name, description, ingredients, process} });
  }

  return (
    <div className='dish-card' onClick={navigateDishInfo}>
        <div className='dish-card__content-wrapper'>
            <div className='dish-card__header'>
                <img src={image} className='dish-card__img' />
            </div>
            <div className='dish-card__body'>
                <p className='dish-card__name'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default DishCard
