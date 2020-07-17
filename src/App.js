import React, {Component} from 'react';
import './App.css';
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import RandomGenerator from "./components/RandomGenerator";
import LastNumber from "./components/LastNumber";
import Options from "./components/Options";
import {Button, Modal} from "react-bootstrap";

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
        if (sequence.length === 90) {
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
        if (x === -1) {
            return
        }
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
        // console.log('Generator - ', this.state)
        return x
    }

    resetGame = () => {
        location.reload()
    }

    render() {
        return (
            <div className="App">
                <Modal show={this.state.gameOver} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Game Over</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have used up all the numbers</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.resetGame}>
                            Reset Game
                        </Button>
                    </Modal.Footer>
                </Modal>
                <NavBar/>
                <div className="row">
                    <div className="col">
                        <Board className="m-8 p-8" sequence={this.state.sequence}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <LastNumber value={this.state.lastNumber}/>
                    </div>
                    <div className="col">
                        <Options sequence={this.state.sequence}/>
                    </div>
                    <div className="col-3">
                        <RandomGenerator nextRandomInteger={this.generateNumber}/>
                    </div>
                    <div className="col-1"/>
                </div>
            </div>
        );
    }
}

export default App;
