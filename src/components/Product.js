import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'

const Product = (curElem) => {
    const { id, image, name, price, category} = curElem
  return (
    <NavLink to={`/singleProduct/${id}`}>
        <div className='card'>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
        </div>

        <div className='card-data'>
            <div className='card-data-flex'>
                <h3>{name}</h3>
                <p className='card-data--price' >{<FormatPrice price={price}/>}</p>
            </div>

        </div>

    </NavLink>
  )
}

export default Product