import React, { useState } from 'react'

export const ToggleData = () => {
    const [name, setName] = useState('Raju')
    const toggleData=()=>{
        var myName=name
        if(myName=='Raju'){
            setName('Aditi')
        }else{
            setName('Raju')
        }
    }
    return (
        <div>
            <h1>Toggle data example</h1>
            <h3>Get Name is <span style={{color:'red'}}>{name}</span></h3>
            <button onClick={toggleData}>Toggle-Button</button>
            
            </div>
    )
}
