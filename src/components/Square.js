import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);

    }

    createBlock = function () {
        const {value, done} = this.props
        if (done) {
            return (
                <div className="col square done">{value}</div>
            )
        } else {
            return (
                <div className="col square">{value}</div>
            )
        }
    }

    render() {
        return (this.createBlock())
    }
}

export default Square;