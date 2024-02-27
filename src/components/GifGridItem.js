import React from 'react'

const GifGridItem = ({id, title, url}) => {
  console.log(title);
  return (
   <div className='card animate__animated animate__fadeInDown'>
    <img src={url} alt={title} ></img>
    <p>{title} </p>
    
   </div>
   
  )
}

export default GifGridItem
