import React from "react"
import "./style.css"

function Jumbotron(props) {
    return <h1 className="jumbotron">{props.children}</h1>
}

export default Jumbotron