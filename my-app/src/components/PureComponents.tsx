import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
  render() {
    return (
      <div> PureComponents </div>
    )
  }
}

export default PureComponents

// Pure Components in React are the components which do not re-renders 
//when the value of state and props has been updated with the same values