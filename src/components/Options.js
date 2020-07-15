import React, {Component} from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequenceBoxRendered: false
        }
    }

    renderSequenceBox = () => {
        if (!this.state.sequenceBoxRendered) {
            return (
                <div/>
            )
        } else {
            // console.log('ok')
            return (
                <div className="card card-body">
                    {this.props.sequence.join(', ')}
                </div>
            )
        }
    }

    invertState = () => {
        this.setState({
            sequenceBoxRendered: !this.state.sequenceBoxRendered
        })
    }

    render() {
        const sequence = this.props.sequence
        const lastFive = sequence.slice(-5)
        return (
            <div>
                <div className="btn btn-lg btn-info m-4" data-toggle="tooltip" data-placement="top"
                     title={lastFive}>
                    Last 5
                </div>
                <button className="btn btn-lg btn-secondary m-4" data-toggle="tooltip" data-placement="top"
                        title="View the complete sequence so far" onClick={this.invertState}>
                    View Sequence
                </button>
                <button className="btn btn-lg btn-danger m-4" data-toggle="tooltip" data-placement="top"
                        title="Reset board">
                    Reset
                </button>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        {sequence}
                    </div>
                </div>
                {this.renderSequenceBox()}
            </div>
        );
    }
}

export default Options;