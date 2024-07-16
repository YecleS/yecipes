import React from 'react';
import '../Styles/Catalog.css';
import DishCard from '../UIComponents/DishCard';
import DishData from '../DishData.json';

const Catalog = () => {
  return (
    <div className='catalog'>
      <div className='catalog__content-wrapper'>
        {DishData.map((dishes) =>(
            <DishCard key={dishes.id} 
              image={require(`../Assets/${dishes.img}`)}  
              name={dishes.name} 
              description={dishes.description} 
              ingredients={dishes.ingredients} 
              process={dishes.process}
            />
        ))}
      </div>
    </div>
  )
}

export default Catalog
