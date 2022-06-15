import React from 'react'
import { useContext } from 'react'
import Notecontex from '../../conextapi/nots/Notecontex'
const Home = () => {
  const data=useContext(Notecontex)
  return (
    <div>
      <h1>my name is: {data.name}</h1>
      <h2>my email id : {data.email}</h2>
      <h3>my phone number: {data.phone}</h3>
    </div>
  )
}

export default Home