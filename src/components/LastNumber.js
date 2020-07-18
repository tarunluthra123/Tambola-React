import React, {Component} from 'react';
import Radium, {StyleRoot} from "radium";
import {fadeIn} from "react-animations";

const styles = {
    fadeIn: {
        animation: '2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class LastNumber extends Component {
    render() {
        if (this.props.value === '') {
            return (
                <div/>
            )
        } else {
            // console.log('Value is /' + this.props.value + '/')
            return (
                <StyleRoot style={styles.fadeIn}>
                    <div className="card card-body m-4 p-3" id="lastNumberBox">
                        <p id="lastNumberBoxText">Last Number</p>
                        {this.props.value}
                    </div>
                </StyleRoot>
            );
        }
    }
}

export default LastNumber;