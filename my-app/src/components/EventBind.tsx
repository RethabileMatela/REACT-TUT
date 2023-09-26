import React, { Component } from "react";

export class EventBind extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "hello",
//     };
//     this.clickHandler = this.clickHandler.bind(this);
//   } 
//   clickHandler() {
//     //this keyword is undefined in event handler has the need for event binding
//     this.setState({
//       message: "Good Bye",
//     });
//   }
//   clickHandler =()=>{
//     this.setState({
//         message: "Good Bye",
//   }
  render() {
    return (
      <div>
        {/* <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>click me</button>
        <button onClick={() => this.clickHandler()}>click me</button>
        <button onClick={this.clickHandler}>click me</button> */}
      </div>
    );
  }
}

export default EventBind;
