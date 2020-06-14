import React from 'react'

// function Greet(){
//     return <h1>Bismillah-hir-rah-manir-rahim</h1>
// }

const Greet = (props) => {
  const {name, position, children} = props
    return (
    <div> 
        <h1>
          Hello  {name} a.k.a {position}
        </h1>
        {children}
    </div>
    )
    
} 


export default Greet