import React from 'react'
import './convertor.css'

export default function Convertor() {
    return (
        <div className='container'> 
         <h3 className='title-convert'> Currency convertor </h3>
        <input type='number' name='base-val' className='input-rate'>
          
        </input>
        <span className='arrow-convert'> == </span>
        <input type='number' name='conversion-val' className='input-rate'>
        </input>
        <div className='btn-div'>
        <button type='submit' className='submit-btn' >Convert</button>
        </div>
        
      </div>
    )
}
