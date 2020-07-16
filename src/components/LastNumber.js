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
                <div>
                    Last Number was :<br/>
                    {this.props.value}
                </div>
            );
        }
    }
}

export default LastNumber;