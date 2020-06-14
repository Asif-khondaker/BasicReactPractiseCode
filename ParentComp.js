import React, { Component}  from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Asif'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Asif'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent comp render')
        return (
            <div>
                Parent Component
                <MemoComp/> 
                {/* <RegularComp name={this.state.name}></RegularComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
