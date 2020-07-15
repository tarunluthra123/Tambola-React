import React, {Component} from 'react';

class RandomGenerator extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            val: '',
            nextRandomInteger: this.props.nextRandomInteger,
            isSet: false
        }
        console.log(this.state)
    }

    rand = () => {
        // console.log('rand')
        return Math.floor(Math.random() * 100) % 90 + 1;
    }

    shuffle = () => {
        let counter = 0
        let id = setInterval(() => {
            this.setState({
                val: this.rand()
            })

            counter++
            // console.log('counter = ', counter)

            if (counter === 10) {
                // console.log('here')
                clearInterval(id)
                let x = this.props.nextRandomInteger()
                this.setState({
                    val: x,
                    isSet: true
                })
                // console.log('x=', x)
            }
        }, 100)
    }

    render() {
        return (
            <div id="random-generator" className="card">
                <div className="card-body">
                    <button className="btn btn-success btn-large" onClick={this.shuffle}>
                        Generate
                    </button>
                    <div>
                        {this.state.val}
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomGenerator;