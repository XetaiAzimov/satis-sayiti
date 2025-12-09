import React from 'react'

function Card({title,price,image, onClick}) {
  return (
       <div className='card' onClick={onClick} >
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
   )
}

export default Card