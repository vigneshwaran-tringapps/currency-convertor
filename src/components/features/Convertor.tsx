import './convertor.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from '../ui/button';

export default function Convertor() {

  interface currency{
       Base:string,
       rate?:any
  }

  const [rates , setRates] = useState<Array<currency>>([]);

  const fetchApi = async()=>{
    return axios.get<currency[]>("http://localhost:5000/api/rates")
    .then(res=> {
      setRates(res.data);
     }   
    );
    
  };

  // useEffect(()=>{
  //    console.log(rates.keys)
  // })

  

    return (
        <div className='container-input-placeholder'> 
        <input type='number' name='base-val' className='input-rate'/>
        <select className='dropdown-list'>
        <option>USD</option>
        </select>  
        <button onClick={()=>console.log(fetchApi)}></button>
       </div>
    )
}
