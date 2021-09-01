import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* if clickHandler() it becomes a function call instaed of event . Event is just a function not a function call */}
        </div>
    )
}

export default FunctionClick
