// import React, { Component } from "react";

// class Form extends Component {
//     state{
//         firstName:"";
//     }
//  handleChange =(event: { target: { value: any; }; })=>{
// this.setState({
//     firstName: event.target.value;

// })
//     console.log(event.target.value);
    
//     }
//   render() {
//     return (
//       <div>
//         <form>
//           <input onChange={this.handleChange} type="text" value={this.event.firstName} />
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>Form</div>
    )
  }
}

export default Form