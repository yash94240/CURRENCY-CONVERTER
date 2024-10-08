import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrency from './hooks/useCurrency';
import InputBox from './components/input';

 function App() {
  const [amount,setamount]=useState();
  const [from,setfrom]=useState("USD");
  const [to,setto]=useState("INR");
  const [res,setres]=useState(0);

  const currencyInfo= useCurrency(from)
  //console.log(currencyInfo,"keys corresponding to curr");
  
  const options = Object.keys(currencyInfo)
 // console.log(currencyInfo["INR"],"KEYS")
  function convert(){
    setres(amount*currencyInfo[to])
  }
  const swap=()=>{
    setfrom(to)
    setto(from)
    setamount(res)
    setres(amount)
  }


  return (
    <>
    <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
            backgroundImage: `url(https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}>

    
    <div className='w-full'>
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-neutral-600">
      <form
      onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}
      >
        <div className="w-full mb-1">
          <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          OnAmountChange={(amount)=>{
            setamount(amount)
            console.log(amount);
          }}
          
          
          OnCurrencyChange={(currency)=>{
            setfrom(currency)
            
          }}
          
          ></InputBox>
        </div>
        <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-red-800 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mb-1">
          <InputBox
          label="To"
          amount={res}
          currencyOptions={options}
          selectCurrency={to}
          amountDisable
          OnCurrencyChange={(currency)=>{
            setto(currency)
            
          }}
          
          ></InputBox>
        </div>


                    <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>

      </form>


    </div>
    </div>
    
    </div>
    </>
  )
}

export default App
