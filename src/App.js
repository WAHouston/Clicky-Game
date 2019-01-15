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
        let wrong = false
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === id) {
                    if (card.clicked) {
                        wrong = true
                    }
                    card.clicked = true
                }
                return card
            }),
            score: this.state.score + 1,
            topScore: Math.max(this.state.topScore, this.state.score + 1)
        })
        if (wrong) {
            this.restart()
        }
    }

    restart = () => {
        this.setState({
            score: 0,
            topScore: Math.max(this.state.topScore, this.state.score),
            card: this.state.cards.map((card) => {
                card.clicked = false
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