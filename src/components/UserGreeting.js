import React, { Component } from 'react'

 class UserGreeting extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:false
         }
     }
     
    render() {

        return(
            this.state.isLoggedIn ?
            <div>Welcome Vishwas</div>:
            <div>Welcome Guest</div>
        )

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Vishwas</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>



        {/*if(this.state.isLoggedIn){//if else statements must be outside the JSX
            return(
                <div>Welcome Shom</div>
            )
        }else{
            return(
                <div>Welcome Guest</div>
            )
        }*/}
        
    //     return (
    //         <div>
    //            <div> Welcome shom</div>
    //            <div>Welcome Guest</div>
    //         </div>
    //     )
    // 
    }
}

export default UserGreeting
