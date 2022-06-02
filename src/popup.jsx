import React from "react"
import {render} from "react-dom"

const Popup = () => {
    return(
        <div>
            <h1>HELLO POPUP</h1>
        </div>
    )
}

render(<Popup/>, document.getElementById("render-target"))