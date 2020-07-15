import React, {Component} from 'react';

class LastNumber extends Component {
    render() {
        return (
            <div className="col-3">
                Last Number was :<br/>
                {this.props.value}
            </div>
        );
    }
}

export default LastNumber;