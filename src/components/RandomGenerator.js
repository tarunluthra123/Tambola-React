import React, {Component} from 'react';
import EleventhDoctorPhoto from '../../public/EleventhDoctor.png'
import NehaDhupiaPhoto from '../../public/NehaDhupia.jpeg'

class RandomGenerator extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            val: 'Start',
            nextRandomInteger: this.props.nextRandomInteger,
            isSet: false
        }
        console.log(this.state)
    }


    dialogues = {
        2: 'Kitne aadmi the ?',
        3: 'Number of times Sheldon knocks',
        4: 'Botal Vodka',
        5: <img src={NehaDhupiaPhoto} alt="One and one" height="140px"/>,
        6: 'TikTok nibbas',
        7: 'Khoon Maaf',
        9: "Cats' lives",
        10: 'Bahane karke le gye dil',
        11: <img src={EleventhDoctorPhoto} alt="One and one" height="140px"/>,
        12: 'A dozen',
        13: 'Unlucky number',
        14: 'Valentine Day',
        16: 'Sweet Sixteen',
        19: 'End of the teens',
        21: 'Din me paise double',
        25: 'The Silver Jubilee',
        45: 'Halfway there',
        50: 'Rupya kaat overacting ka',
        52: 'Pack of Cards',
        70: 'Minute hai tumhare paas',
        75: 'Diamond Jubilee',


    }

    rand = () => {
        // console.log('rand')
        return Math.floor(Math.random() * 100) % 90 + 1;
    }

    shuffle = () => {
        let counter = 0
        this.setState({
            isSet: false
        })
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
                if (x === -1) return
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
            <div id="random-generator" className="m-4">
                <div className="card-body card row">
                    <button className="btn btn-primary btn-lg" onClick={this.shuffle}>
                        <h2>Generate</h2>
                    </button>
                    <div className="generatorValue">
                        <h1 className="display-4">{this.state.val}</h1>
                    </div>

                    <div className="alert-secondary" id="dialogueBox">
                        {this.state.isSet && this.dialogues[this.state.val]}
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomGenerator;