import React from 'react';
import '../Styles/GalleryPictures.css'


const GalleryPictures = ({img, description , classNameVariant}) => {
  return (
    <div className={`gallery-pictures ${classNameVariant}`}>
      <img src={img} className='gallery-pictures__img'></img>
      <div className='gallery-pictures__description-wrapper'>
        <p className='gallery-pictures__description'>{description}</p>
      </div>
    </div>
  )
}

export default GalleryPictures
