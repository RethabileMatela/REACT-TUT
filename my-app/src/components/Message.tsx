import React, { Component } from 'react'

export class Message extends Component {

    // 1) create state object and initialize it, usually done inside class constructor 
    // constructor(){
    //     // 2) within constructor we call the super() method, this is required because
    //     // it extends react component class and the call has to be made to the base class constructor 

    //     // super(){
    //     //     // 3) create our state object 
    //     //     this.state = {
    //     //       message: "welcome visitor"
                
    //     //     }
    //     // }
    // }

    changeMessage(){
      this.setState({
        message: "thank you for subscribing"
      })
    }
  render() {
    return (
      // 4) bind state value in the render function 
      <div>
      {/* {this.state.message} */}

      {/* 5) create the subscribe button  */}
      {/* 6) listen to the click event on the button and then change the message, changeMessage is a handler  */}

      <button onClick={()=> this.changeMessage()}> Subscribe</button>
      </div>
    )
  }
}

export default Message

// **********************************************************************************************************
// have a subscribe button below the text 
// when button is clicked, text should change from 'welcome visitor' to 'thank you for subscribing '

// eslint-disable-next-line no-lone-blocks
{/*
STATE
- managed within the component 
- variables declared in the function body 
- can be changed 
- useState  hook for functional components 
- this.state for class components 
*/}