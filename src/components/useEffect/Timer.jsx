import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [countTime,setCount]=useState(0)

    //declear useEffect hooks
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1)
        },1000)
    })
  return (
    <div>
       <h1>set time out example suing useEffect hooks</h1> 
       <h3>start count down {countTime}</h3>
       
        
        </div>
  )
}
