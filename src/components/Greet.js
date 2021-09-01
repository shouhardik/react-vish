import React from 'react'

// function Greet(){
//     return <h1>Hi Shouhardik</h1>
// }
 

 const Greet = (props) =>{
   //  console.log(props)
   const {name,hero}=props
      return(
          <div>
          <h1>Hi {name} you are {hero}</h1>
          {/* {children} */}

          </div>
      )

 }
export default Greet