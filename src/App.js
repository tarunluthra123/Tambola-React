import React, {Component} from 'react';
import './App.css';
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import RandomGenerator from "./components/RandomGenerator";
import LastNumber from "./components/LastNumber";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sequence: [],
            gameOver: false,
            loading: false,
            nextNumber: '',
            lastNumber: ''
        }
    }

    nextRandomInteger = () => {
        let x = Math.floor(Math.random() * 100) % 90 + 1
        const {sequence} = this.state
        if (sequence.size === 90) {
            this.setState({
                gameOver: true
            })
            console.log("Game over ", sequence)
            return -1
        }
        while (sequence.includes(x)) {
            x = Math.floor(Math.random() * 100) % 90 + 1
        }
        this.setState({
            sequence: [...this.state.sequence, x]
        })
        console.log('Random number = ' + x)
        return x
    }

    generateNumber = () => {
        let x = this.nextRandomInteger()
        if (this.state.nextNumber === '') {
            this.setState({
                nextNumber: x
            })
        } else {
            this.setState({
                lastNumber: this.state.nextNumber,
                nextNumber: x
            })
        }
        // console.log('in generate number')
        console.log('Generator - ', this.state)
        return x
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className="row">
                    <div className="col">
                        <Board className="m-10 p-10"/>
                    </div>
                </div>
                <div className="row">
                    <LastNumber value={this.state.lastNumber}/>
                    <div className="col"/>
                    <div className="col-3">
                        <RandomGenerator nextRandomInteger={this.generateNumber}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
