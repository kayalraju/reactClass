import React, { useState } from 'react'

export const UseStateex1 = () => {
    const [name,setName]=useState('Abanti')
    const changeName=()=>{
        setName('Amrita')
    }
  return (
    <div>
<h1> my name is {name}</h1>

<button onClick={changeName}>Update name</button>



    </div>
  )
}
