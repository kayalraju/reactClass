import React,{useState} from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    return (
        <div>

            <h1>example useState Hooks </h1>
            <h3>counte {count} times</h3>
            <button onClick={()=>setCount(count+1)}>Click-me</button>

        </div>
    )
}
