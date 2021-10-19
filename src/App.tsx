
import './App.css';
import Convertor from './components/features/Convertor';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react';

import { currency } from './types/types';



function App() {
   const BASE_URL:string = "http://localhost:5000/api/rates";
   const [currencyOptions, setCurrencyOptions] = useState<Array<any>>([])
   const [fromCurrency, setFromCurrency] = useState<number>()
   const [toCurrency, setToCurrency] = useState<string>()
   const [exchangeRate, setExchangeRate] = useState<number|any>()
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
     fetch(BASE_URL)
       .then(res => res.json())
       .then(data => {
         const firstCurrency = Object.keys(data.rates)[0]
         setCurrencyOptions([data.base, ...Object.keys(data.rates)])
         setFromCurrency(data.base)
         setToCurrency(firstCurrency)
         setExchangeRate(data.rates[firstCurrency])
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