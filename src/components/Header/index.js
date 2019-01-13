import React from "react"
import "./style.css"

function Header(props) {
    return (
        <header>
            <span id="topScore">Top Score: {props.topScore}</span>
            <span id="score">Score: {props.score}</span>
        </header>
    )
}

export default Header