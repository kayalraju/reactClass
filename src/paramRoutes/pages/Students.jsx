import React from 'react'
import { useContext } from 'react'
import Notecontex from '../../conextapi/nots/Notecontex'
const Students = () => {
  const data=useContext(Notecontex)
  return (
    <div>
      <h1>
        <h1>my name is: {data.name}</h1>
      <h2>my email id : {data.email}</h2>
      <h3>my phone number: {data.phone}</h3>
      </h1>
    </div>
  )
}

export default Students
