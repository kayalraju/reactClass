import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Notestate from '../conextapi/nots/Notestate'
import Navbar from './layout/Navbar'

import Home from './pages/Home'
import Students from './pages/Students'

const ParamsRoute = () => {
  return (
    <div>
      <Notestate>
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={<Students/>}/>
            </Routes>
        </Router>
        </Notestate>
    </div>
  )
}

export default ParamsRoute