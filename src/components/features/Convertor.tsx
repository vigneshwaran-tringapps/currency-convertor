import './convertor.css';


export default function Convertor(props:any) {

    const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency,
      onChangeAmount,
      amount
    } = props

    return (
        <div className='container-input-placeholder'> 
        {/* <input 
        type='number' 
        name='base-val' 
        className='input-rate'
        value={amount}
        onChange={onChangeAmount}/>
        <select 
        className='dropdown-list'
        value={SelectedCurrency} 
        onChange={onchangeCurrency}>
        { currencyOption.map((option:any)=>(
          <option 
          key={option}
          value={option}>{option}
          </option>
        ))}
        </select>   */}
        <input type="number" className="input-rate" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} onChange={onChangeCurrency} className='dropdown-list'>
        {currencyOptions.map((option:any) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      
       </div>
    )
}
