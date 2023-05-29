// Code Keypad Component Here

import React from "react"

function Keypad (props){
    function keyUpHandler(){console.log("Entering password...")}
    return (
        <input name="input" type="password" onChange={keyUpHandler}></input>
    )
}

export default Keypad