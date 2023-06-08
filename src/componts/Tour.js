import React from 'react'

function Tour(Tour) {
  return (
    <div>
         <div>
          <h2>Plan with love in travelling </h2>
         </div>
   
                   <div>

                    {/* we used map function at there and takes the data */ }
                           {
                            Tour.map=(Tour) =>{
                                return <card {...Tour}/>  
                                {/*  cards*/}
                            }
                           }
                   </div>
    </div>
  )
}

export default Tour