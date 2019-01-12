import React from "react"
import Footer from "./components/Footer"
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
            <Wrapper>
                <Header />
                <Jumbotron />
                {this.state.cards.map(card => (
                    <Card
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    clicked
                    />
                ))}
                <Footer />
            </Wrapper>
        )
    }
}

export default App