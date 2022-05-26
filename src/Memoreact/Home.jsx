import React,{ memo } from 'react'

 function Home(props) {
    console.log("this is a inner component",props.data);
  return (
    <div>
        <h1>Home Component</h1>
        
    </div>
  )
}
export default memo(Home)