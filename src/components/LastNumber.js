import React, {Component} from 'react';

class LastNumber extends Component {
    render() {
        if (this.props.value === '') {
            return (
                <div/>
            )
        } else {
            // console.log('Value is /' + this.props.value + '/')
            return (
                <div className="card card-body m-4 p-3" id="lastNumberBox">
                    <p id="lastNumberBoxText">Last Number</p>
                    {this.props.value}
                </div>
            );
        }
    }
}

export default LastNumber;