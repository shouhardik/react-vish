import React from 'react'

const Hello=()=>{
    // return(
    //     <h1>Hey Vishwas</h1>
    // )
        
        return React.createElement(
            'div',
            {id:'hello',className:'dummyclass'},
            React.createElement('h1',null,'hola shom')
        )
    
}

export default Hello