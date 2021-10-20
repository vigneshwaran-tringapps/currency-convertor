
import './App.css';
import Convertor from './components/features/Convertor';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react';

import { currency,ratesValue } from './types/types';
import axios from 'axios';



function App() {
   const BASE_URL:string = "http://localhost:8000/api/rates";
   const [currencyOptions, setCurrencyOptions] = useState<string[]>([])
   const [fromCurrency, setFromCurrency] = useState<string>()
   const [toCurrency, setToCurrency] = useState<string>()
   const [exchangeRate, setExchangeRate] = useState<number>()
   const [amount, setAmount] = useState<number>(1)
   const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(true)
 
   let toAmount, fromAmount
   if (amountInFromCurrency) {
     fromAmount = amount
     toAmount = amount * exchangeRate
   } else {
     toAmount = amount
     fromAmount = amount / exchangeRate
   }
 
   useEffect(() => {
    axios.get<currency[]>('http://localhost:8000/api/rates')
    .then(res=>{
      const firstCurrency = Object.keys(res.data[0].rate)[0]
      setCurrencyOptions([...Object.keys(res.data[0].rate)])
      setFromCurrency(res.data[0].base)
      setToCurrency(firstCurrency)
      setExchangeRate((res.data[0].rate)[firstCurrency])
      
    })
   }, [])
 
   useEffect(() => {
     if (fromCurrency != null && toCurrency != null) {
       fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
         .then(res => res.json())
         .then(data => setExchangeRate(data.rates[toCurrency]))
     }
   }, [fromCurrency, toCurrency])
 
   function handleFromAmountChange(e:any) {
     setAmount(e.target.value)
     setAmountInFromCurrency(true)
   }
 
   function handleToAmountChange(e:any) {
     setAmount(e.target.value)
     setAmountInFromCurrency(false)
   }
 
   return (
     <>
      <div className="container">
       <h1>Convert</h1>
       <Convertor
         currencyOptions={currencyOptions}
         selectedCurrency={fromCurrency}
         onChangeCurrency={(e:any) => setFromCurrency(e.target.value)}
         onChangeAmount={handleFromAmountChange}
         amount={fromAmount}
       />
       <div className="equals">=</div>
       <Convertor
         currencyOptions={currencyOptions}
         selectedCurrency={toCurrency}
         onChangeCurrency={(e:any) => setToCurrency(e.target.value)}
         onChangeAmount={handleToAmountChange}
         amount={toAmount}
       />
       </div>
     </>
   );
 }
 
 export default App;