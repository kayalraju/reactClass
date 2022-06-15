import React from 'react'
import Notecontex from './Notecontex'

const Notestate = ({children}) => {

  const state={
    name:"Aditi gupta",
    email:"aditi@gmail.com",
    phone:"9933935760"
  }
  return (
    <div>
      <Notecontex.Provider value={state}>
      {children}
      </Notecontex.Provider>

    </div>
  )
}

export default Notestate