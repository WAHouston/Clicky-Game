import React from "react"
import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import cards from "./cards.json"

class App extends React.Component {
    state = {
        cards: cards.map((card) => {
            card.clicked = false
            return card
        }),
        score: 0,
        topScore: 0
    }
    
    clicked = (id) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === id) {
                    card.clicked = true
                }
                return card
            })
        })
    }
    
    render() {
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore}/>
                <Wrapper>
                    <Jumbotron />
                    {this.state.cards.map(card => (
                        <Card
                        id={card.id}
                        key={card.id}
                        image={card.src}
                        alt={card.alt}
                        clicked={this.clicked}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}

export default App