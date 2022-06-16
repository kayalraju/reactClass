import React from 'react'
import { useReducer } from 'react'
const initianstate = 0
function reducer(state, action) {
    switch (action.type) {

        case "incriment":
            return state + 1

        case "decriment":
            return state - 1

        default:
            throw new Error
    }
}
const ReducerCount = () => {

    const [state, dispatch] = useReducer(reducer, initianstate)
    return (
        <div>
            <h1>React use reducer hooks using incriment decriment</h1>
            <h2>State value: {state}</h2>

            <button onClick={() => dispatch({ type: "incriment" })}>Incriment</button>
            <button onClick={() => dispatch({ type: "decriment" })}>Decriment</button>
        </div>
    )
}
export default ReducerCount