import React, {Component} from 'react';

class Square extends Component {
    createBlock = function () {
        const {value, done} = this.props
        if (done) {
            return (
                <div className="col square alert-primary done">{value}</div>
            )
        } else {
            return (
                <div className="col square alert-light">{value}</div>
            )
        }
    }

    render() {
        return (this.createBlock())
    }
}

export default Square;