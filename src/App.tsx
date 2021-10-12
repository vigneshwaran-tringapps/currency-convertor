
import './App.css';
import Convertor from './components/features/Convertor';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
 
 
return (
  <div className='container'>
   <div className='row'>
      <div className='ccol-sm-8'>
         <Convertor/>
         <Convertor/>
      </div>
      <div className='col-sm-4'></div>
   </div>
</div>
);
}

export default App;
