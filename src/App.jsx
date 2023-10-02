
import {useState} from 'react'
import './App.css'

function App() {
 const[value,setValue] = useState("")

 const keepTrack = (e) =>{
  setValue(value.concat(e.target.name))
 }

 const clear = () => {
  setValue("")
 }

 const calculate = () =>{
  setValue(eval(value))
 }

  return (
    <>
    <div className='container'>
      <div>
        <input type="text" value={value} className='input' />
      </div>
      <div className='btn'>
        
        <button onClick={keepTrack} name="1">1</button>
        <button onClick={keepTrack} name="2">2</button>
        <button onClick={keepTrack} name="3">3</button>
        <button onClick={keepTrack} name="4">4</button>
        <button onClick={keepTrack} name="5">5</button>
        <button onClick={keepTrack} name="6">6</button>
        <button onClick={keepTrack} name="7">7</button>
        <button onClick={keepTrack} name="8">8</button>
        <button onClick={keepTrack} name="9">9</button>
        <button onClick={keepTrack} name="0">0</button>
        <button onClick={keepTrack} name="+">+</button>
        <button onClick={keepTrack} name="-">-</button>
        <button onClick={keepTrack} name="*">*</button>
        <button onClick={keepTrack} name="/">/</button>
        <button onClick={clear} name="c">C</button>
        <button onClick={calculate} name="=">=</button>
        </div>
    </div>
      
    </>
  )
}

export default App
