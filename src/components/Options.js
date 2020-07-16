import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequenceBoxRendered: false,
            lastFiveRendered: false,
            showModal: false
        }
    }

    renderBox = () => {
        if (!this.state.sequenceBoxRendered && !this.state.lastFiveRendered) {
            return (
                <div/>
            )
        } else if (this.state.sequenceBoxRendered) {
            // console.log('ok')
            return (
                <div className="card card-body">
                    {this.props.sequence.join(', ')}
                </div>
            )
        } else {
            return (
                <div className="card card-body">
                    {this.props.sequence.slice(-5).join(', ')}
                </div>
            )
        }
    }

    invertSequenceState = () => {
        if (this.state.lastFiveRendered) {
            this.setState({
                lastFiveRendered: false
            })
        }
        this.setState({
            sequenceBoxRendered: !this.state.sequenceBoxRendered
        })
    }

    invertLastFiveState = () => {
        if (this.state.sequenceBoxRendered) {
            this.setState({
                sequenceBoxRendered: false
            })
        }
        this.setState({
            lastFiveRendered: !this.state.lastFiveRendered
        })
    }

    changeModalState = () => {
        this.setState({
            showModal: true
        })
    }

    resetGame = () => {
        this.handleModalClose()
        location.reload()
    }


    handleModalClose = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        const sequence = this.props.sequence
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You will lose all your progress if you reset the game</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleModalClose}>
                            Continue with current game
                        </Button>
                        <Button variant="danger" onClick={this.resetGame}>
                            Reset Game
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="btn btn-lg btn-info m-4" data-toggle="tooltip" data-placement="top"
                     title="View Last 5 Numbers" onClick={this.invertLastFiveState} id="lastFiveOption">
                    Last 5
                </div>
                <button className="btn btn-lg btn-outline-light m-4" data-toggle="tooltip" data-placement="top"
                        title="View the complete sequence so far" onClick={this.invertSequenceState}
                        id="completeSequenceOption">
                    Complete Sequence
                </button>
                <button className="btn btn-lg btn-danger m-4" data-toggle="tooltip" data-placement="top"
                        title="Reset board" onClick={this.changeModalState}>
                    Reset
                </button>
                <div id="sequenceBox">
                    {this.renderBox()}
                </div>
            </div>
        );
    }
}

export default Options;