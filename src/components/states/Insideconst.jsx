import React, { Component } from 'react'

export default class Insideconst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ritam saha',
            phone: '9988659865',
            email: 'ritam@gmail.com',
            city:this.props.city
        }
    }
    render() {
        return (
            <div>
                <h1>inseide the class using state</h1>
                <p>hello user {this.state.name}</p>
                <p> your emai is {this.state.email}</p>
                <p> your phone number is {this.state.phone}</p>
                <p> your city is {this.props.city}</p>
            </div>
        )
    }
}
