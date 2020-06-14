import React from 'react';

class Message extends React.Component {
    constructor(){
        super()
        this.state = {
            Message: 'Welcome Visitors!'
        }
    }

    ChangeMessage(){
        this.setState({
            Message: 'Thank you for subscribing'
        })
    }
  render() {
    return(
        <div>
            <h2>{this.state.Message}</h2>
            <button onClick={() => this.ChangeMessage()}>Subscibe</button>
        </div>
      
    ) 
  }
}

export default Message 