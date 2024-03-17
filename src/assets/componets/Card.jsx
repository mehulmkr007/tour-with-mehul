import { useState } from 'react'


function Card({id,name,tourPrice,information,image,removeTour}){

    let [readmore,setReadmore] = useState(false)
    let info = readmore ? information : `${information.substring(0,200)}...`

    function readmoreHandler(){
        setReadmore(!readmore)
    
    }
    
    
    return (
        
        <div className='card'>
                 <img src={image} alt="#" className='image'></img>
                 
                <div className='city-info'>
                    <h4 className='city-name'>{name}</h4>
                    <h4 className='price'>{tourPrice}</h4>
                </div>

                <div className='description'>
                    {info}

                    <span onClick={readmoreHandler} className='read-more'>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>

                <div className='not-int'>
                    <button className='not-interested' onClick={() => {removeTour(id)} }>Not interested</button>
                </div>
        </div>
    )
}

export default Card