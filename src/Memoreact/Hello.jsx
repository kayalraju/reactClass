import React,{memo} from 'react'

 function Hello() {
     console.log('hello');
  return (
    <div>
      hello
    </div>
  )
}
export default memo(Hello)