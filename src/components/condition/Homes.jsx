import React from 'react'
import { Login } from './Login'
import { Logout } from './Logout'

export const Homes = (props) => {

    const isLogin=true
    const checkFun=()=>{
        if(isLogin){
            return <Login/>
        }else{
            return <Logout/>
        }
    }
  return (
    <div>
       
       <h1>Home Component</h1> 
       {checkFun()}
     <h1> hello user you are login {props.name} </h1>  
        
        </div>
  )
}
