import React from 'react'

export default function ListKey() {

    // using list
    const menu = ['Home', 'About', 'Contact', 'Login', 'Register'];

    const updateMenu = menu.map((menus) => {
        return <li>{menus} </li>
    })

    // key using list
    const menues = ['Home', 'About', 'Contact', 'Login', 'Register'];

    const updateNav=menues.map((result,index)=>{
        return <li> key: {index}  {result} </li>
    })

    return (
        <div>
            <h1>React ListKey</h1>
            <h3>{updateMenu}</h3>
            <hr />
            <h2> {updateNav}</h2>
        </div>
    )
}
