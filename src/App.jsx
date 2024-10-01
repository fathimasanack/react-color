
import './App.css'

import { useState } from 'react'

import './App.css'

function App() {
   const [color,setColor]=useState("white")
  return (
    <>
      <div className='w-100 p-5 d-flex justify-content-center align-items-center' id='bg' style={{backgroundColor:color,height:'100vh'}}>
        <div>
              <button onClick={()=>setColor("violet")} className='btn rounded-5 m-3' style={{backgroundColor:'violet'}} >violet</button>
              <button onClick={()=>setColor("red")} className='btn  rounded-5 m-3 'style={{backgroundColor:'red'}}>Red</button>
              <button onClick={()=>setColor("purple")} className='btn  rounded-5 m-3'style={{backgroundColor:'purple'}}>Purple</button>
              <button onClick={()=>setColor("black")} className='btn  rounded-5 m-3'style={{backgroundColor:'black'}}>Black</button>
              <button onClick={()=>setColor("blue")} className='btn  rounded-5 m-3'style={{backgroundColor:'blue'}}>Blue</button>
              <button onClick={()=>setColor("yellow")} className='btn btn-warning rounded-5 m-3'>Yellow</button>
              <button onClick={()=>setColor("orange")} className='btn  rounded-5 m-3'style={{backgroundColor:'orange'}}>Orange</button>
              <button onClick={()=>setColor("white")} className='btn btn-light rounded-5 m-3'>White</button>
        </div>
      </div>
    </>
  )
}

export default App
