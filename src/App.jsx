import React, { useState } from 'react'
import { UC,LC,NC,SC} from "./data/PassChar"
const App = () => {
  let [uppercase ,setUppercase] =useState(false)
  let [lowercase , setLowercase ] = useState(false)
  let [symbols , setSymbols] = useState(false)
  let [numbers , setNumbers] =useState(false)
  let [passlength, setPasslength] =useState(10)
  let [fPass , setFpass] =useState('')
  let createPassword =()=>{
    let finalPass =""
    let charSet =""
    if(uppercase || lowercase ||symbols || numbers){

      if(uppercase) charSet +=UC;
      if(lowercase) charSet +=LC;
      if(numbers) charSet +=NC;
      if(symbols) charSet +=SC;
      
      for(let i=0; i<passlength;i++){
       finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
       setFpass (finalPass)
      }

    }
    else{
      alert("must select at least one checkbox")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }
  return (
    <>
      <div className="passwordBox">
        <h2> Password Generator</h2>

        <div className='innerbox'>
          <input type="text"value={fPass } readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label>Password length</label>
          <input type="number" max={20} min={10} value={passlength} onChange={(e)=>setPasslength(e.target.value)}/>
        </div>
        <div className="passlength1">
          <label>Including uppercase</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className="passlength1">
          <label>Including lowercase</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className="passlength1">
          <label>Including numbers</label>
          <input type="checkbox" checked={numbers} onChange={()=>setNumbers(!numbers)} />
        </div>
        <div className="passlength1">
          <label>Including symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>
        <div className="btn">
          <button onClick={createPassword}>Generator Password</button>
        </div>
        
      </div>
    </>
  )
}

export default App
