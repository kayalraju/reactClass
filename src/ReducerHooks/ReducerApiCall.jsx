import React,{useReducer,useEffect} from 'react'
//stape 1
const initialstate={
    loding:true,
    error:'',
    post:{}
}

//stape 2 define reducer function
const reducer=(state,action)=>{
    switch (action.type){
    case 'SUCCESS':
        return{
            loding:false,
            //DEFINE ACTION NAME IS RESULT
            post:action.result,
            error:''
        }
        case 'ERROR':
        return{
            loding:false,
            post:{},
            error:'PROBLEM TO FETCH'
        }
        default:
            return state
    }
}

const ReducerApiCall = () => {
    const[state,dispatch]=useReducer(reducer,initialstate)

    //stape 4 call api
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data =>{
      dispatch({type:'SUCCESS',result:data})
  })
  .catch(error=>{
    dispatch({type:'ERROR'})

  })
    },[])
  return (
    <div>
        <h1>Api call use reducer hoosk</h1>

        {state.loding ? 'Lodding.....' : state.post.title}
      {state.error || null} 

        {/* <h1>Title : {state.post.title}</h1>
        <h2>Body : {state.post.body}</h2> */}
    </div>
  )
}

export default ReducerApiCall