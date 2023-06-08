import React, { useState } from 'react'

function card( {id, name , image , info , price , name } ) {


const [readmore , setreadmore] = useState(false);
const description = '${info.substring(0,200)}....'

function readmoreHandler(){
    setreadmore(!readmore);
}


  return (
                <div className='card'>
                   <img src={image} alt='#' className='image'/>
                <div className='tour-details'>
                    <h4 className='tour-price'> {price}</h4>
                    <h4 className='tour-name'> {name}</h4>
                    
                </div>

                <div className='description '>
                  {description }
                  <span className='read-more' onClick={readmoreHandler}>
                    {readmore ? 'show less': 'read more'}
                  </span>
                </div>
           
              <div>
                
              <button>
                Not Interested
              </button>
              </div>

                </div>

  )
}

export default card