import React, {Component} from 'react';
import Radium, {StyleRoot} from "radium";
import {bounce} from "react-animations";

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

class Square extends Component {
    createBlock = function () {
        const {value, done} = this.props
        if (done) {
            return (
                <div className="col square alert-primary done">
                    <StyleRoot style={styles.bounce}>
                        {value}
                    </StyleRoot>
                </div>
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