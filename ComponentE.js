import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContex from './UserContex'

class ComponentE extends Component {
    render() {
        return (
            <div>
                Component E contex {this.context}
                <ComponentF></ComponentF>
            </div>
        )
    }
}

ComponentE.contextType = UserContex

export default ComponentE
