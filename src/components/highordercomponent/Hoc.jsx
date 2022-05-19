import React, { useState } from 'react'

export default function Hoc() {
  return (
    <>
    <h1>Hoc(high order component)</h1>
    <HocFinal component={Hoc1}/>
    <Hocgreen component={Hoc1}/>
    <Hocblue component={Hoc1}/>
    
    </>
  )
}

function HocFinal(props){
    return <h2 style={{background:'red',width:'300px'}}>Red <props.component/></h2>
}
function Hocgreen(props){
    return <h2 style={{background:'green',width:'300px'}}>green <props.component/></h2>
}
function Hocblue(props){
    return <h2 style={{background:'blue',width:'300px'}}>blue <props.component/></h2>
}


function Hoc1(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Update-counter</button>
        </div>
    )
}