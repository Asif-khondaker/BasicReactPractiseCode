import React from 'react';

class Welcome extends React.Component {
  render() {
    const {name, position} = this.props
    return(
      <h2>
      Welcome {name} a.k.a {position}
      </h2>
    ) 
  }
}

export default Welcome 