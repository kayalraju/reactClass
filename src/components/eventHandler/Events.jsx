import React from 'react'

export const Events = () => {

    const play=()=>{
        
        alert('fev play football');
    }

    return (
        <div>
            <h1>Events in React</h1> 

            <p>
                <button onClick={play}>Click-me</button>
            </p>
        </div>
    )
}
