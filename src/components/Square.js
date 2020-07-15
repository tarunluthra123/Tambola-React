import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        value: this.props.value,
        done: false
    }

    createBlock = function () {
        if (this.state.done) {
            return (
                <div className="col square done">{this.state.value}</div>
            )
        } else {
            return (
                <div className="col square">{this.state.value}</div>
            )
        }
    }

    render() {
        return this.createBlock()
    }
}

export default Square;