import React from 'react'

const StudentProps = (props) => {
    const {name,email,phone,roll,exp}=props
  return (
    <div>
      <h1 style={{border:"2px solid red"}}>React Props</h1>
      <h1>Student name: {name} </h1>
      <h1>Student email: {email} </h1>
      <h1>Student phone: {phone}</h1>
      <h1>Student roll: {roll} </h1>
      <h1>Expression: {exp} </h1>
    </div>
  )
}

export default StudentProps
