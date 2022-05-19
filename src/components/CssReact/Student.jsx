import React from 'react'
import './student.css'

export const Student = () => {
    const myStyle={
        color:"green",
        backgroundColor:"pink",
        padding:"20px",
        border:"4px solid red",
        marginTop:"15px"

    }
  return (
    <>

    {/* //react use in line css */}
    <h1 style={{backgroundColor:"orange", color:"red"}}>Hello Student welcome to webskitters</h1>

    <h1 style={myStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi provident eos error laboriosam voluptatem pariatur repellat, magni porro iure aliquam molestiae omnis doloremque. Tempore nobis sapiente animi pariatur aliquam odio.</h1>

    <div className='container'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsam eligendi neque voluptatum itaque reiciendis autem ab, ut nulla, dolorum blanditiis! Ipsa esse quasi aliquam ex reiciendis nostrum quo distinctio?</div>



    </>

    
  )
}
