import React, { useState } from 'react'
import Hello from './Hello'
import Home from './Home'

export default function Memo() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(100)
  return (
    <div>
        <h1>Memo in react  {count} </h1>
        
        <Home data={data}/>
        <Hello/>

    <button onClick={()=>setCount(count+1)}>Update Compinent</button>
        </div>
  )
}
