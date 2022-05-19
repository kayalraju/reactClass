import React, { useState } from 'react'

export default function Userform() {
    const [inputs, setInputs] = useState({})
    const handlechange = (event) => {
        const name= event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))

    }

    const handlesubmit=(event)=>{
        event.preventDefault()
        console.log(inputs);
    }
    return (
        <div>
            <h1>Userform</h1>
            <form onSubmit={handlesubmit}>
                <label htmlFor="name"> User name:</label>
                <input type="text"
                    name='username'
                    value={inputs.username || ""}
                    onChange={handlechange}
                />
                <br /><br />
                <label htmlFor="name"> User age:</label>
                <input type="text"
                    name='age'
                    value={inputs.age || ""}
                    onChange={handlechange}
                />
                <br /><br />
                <input type="submit" />
            </form>


        </div>
    )
}
