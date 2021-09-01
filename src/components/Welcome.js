import React,{Component} from 'react'

class Welcome extends Component{
    render(){
      //  const {name,hero}= this.props
        return <h1>Hey {this.props.name} its {this.props.hero} </h1>
    }
}

export default Welcome