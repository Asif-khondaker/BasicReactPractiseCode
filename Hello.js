import React from 'react'



function Hello(props){

  function Click(x){
    alert(x)
  }
    return(
      <div>
          <button onClick={Click.bind(this, "Ok! thanks for Clicked me$$")}>Click Me</button>
      </div>
  );
}

export default Hello