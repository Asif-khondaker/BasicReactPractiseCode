import React, { Component } from 'react'

class UserGreeting extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Asif</div>
        // return this.state.isLoggedIn ? (
        // <div>Welcome Asif</div>
        // ) : (
        // <div>Welcome Guest</div>
        // ) 
         
        
    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <di>Welcome Asif</di>
    //     } else{
    //         message = <di>Welcome Guest</di>
    //     }
    // return <div>{message}</div>
        // if(this.state.isLoggedIn)
        // {
        //     return <div>Welcome Asif</div>
        // }
        // else{
        //    return <div>Welcome guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Asif</div>
        //         <div>Welcome guest</div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
