import React, { Component } from 'react'

export default class Userstudent extends Component {

    state={
        name:'Ritam saha',
        phone:'9988659865',
        email:'ritam@gmail.com'
    }

  render() {
    return (
      <div>
        <h1>inseide the class using state</h1>
        <p>hello user {this.state.name}</p>
        <p> your emai is {this.state.email}</p>
        <p> your phone number is {this.state.phone}</p>
      </div>
    )
  }
}
