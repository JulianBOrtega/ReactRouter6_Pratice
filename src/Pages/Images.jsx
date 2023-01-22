import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data';

const Images = () => {
  return (
    <div style={{marginTop: '75px'}}>
      <div className='imageContainer'>
        {
          data.map((img, i) =>
            {
              return <Link to={`/images/${img.id}`} className='cardImage'>
                  <img className='img' src={img.img} alt={'img-' + i}/>
                </Link>
            })
        }
      </div>
    </div>

  )
}

export default Images