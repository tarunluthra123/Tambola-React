import React, {Component} from 'react';
import EleventhDoctorPhoto from '../../public/EleventhDoctor.png'
import TenthDoctorPhoto from '../../public/TenthDoctor.jpeg'
import TwentyOnePhoto from '../../public/TenPlusEleven.jpg'

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
        1: 'One ring to rule them all',
        2: 'Kitne aadmi the ?',
        3: 'Number of times Sheldon knocks',
        4: 'May the Fourth be with you',
        5: 'The magical prime',
        6: 'No of infinity stones',
        7: 'Bond. James Bond.',
        8: 'Ball pool',
        9: "Cats' lives",
        10: <img src={TenthDoctorPhoto} alt="Number of commandments" height="140px"/>,
        11: <img src={EleventhDoctorPhoto} alt="One and one" height="140px"/>,
        12: 'Monkeys',
        13: 'Unlucky number',
        14: 'Valentine Day',
        15: 'Independence Day',
        16: 'Sweet Sixteen',
        17: 'Lucky 17',
        18: 'The age of adulthood',
        19: 'End of the teens',
        20: 'Blind 20',
        21: <img src={TwentyOnePhoto} alt="Two and a one" height="140px"/>,
        22: 'Two little ducks',
        23: 'Number of chromosomes',
        24: 'Two dozen',
        25: 'Din me paise double',
        26: 'The republic day',
        27: 'Gateway to heaven',
        28: 'The Angel Number',
        29: 'In your prime',
        30: 'Its middle Age',
        31: 'Time for fun',
        32: 'Mouth Full',
        33: 'All the 3s',
        34: 'The unspoken rule',
        35: 'Flirty Husband',
        36: 'Jha tak sabko hindi counting ati hai',
        37: 'Mixed luck',
        38: 'Oversize',
        39: 'Watch your waistline',
        40: 'Naughty 40',
        41: "Life's begun at 41",
        42: 'The answer to everything',
        43: 'Pain in the knee',
        44: 'All the fours',
        45: 'Halfway there',
        46: 'Up to tricks',
        47: 'The Star Trek Number',
        48: 'Four dozen',
        49: 'Rise and shine',
        50: 'Amount of money cut for overacting',
        51: 'The alien number',
        52: 'Pack of Cards',
        53: 'Pack with a joker',
        54: 'The Perfect Round',
        55: 'All the fives',
        56: 'Ab tak 56',
        57: 'Mutiny Year',
        58: 'Time to retire',
        59: 'Just retired',
        60: 'Seconds in a minute',
        61: 'Bakers bun',
        62: 'Click the two',
        63: 'Click the three',
        64: 'Catch the chor',
        65: 'Old age pension',
        66: 'Chakke pe chakka',
        67: 'Made in heaven',
        68: 'Saving grace',
        69: 'Noice',
        70: 'Minute hai tumhare paas',
        71: 'Lucky bachelor',
        72: 'Lucky couple',
        73: 'A crutch and a flea',
        74: 'Lucky chor',
        75: 'Diamond Jubilee',
        76: 'Lucky six',
        77: 'Two hockey sticks',
        78: "Heaven's gate",
        79: 'lucky nine',
        80: 'Days to go around the world',
        81: 'Corner shot',
        82: 'Last of the two',
        83: 'India wins Cricket World Cup',
        84: 'Last of the chors',
        85: 'Last of the fives',
        86: 'Last six',
        87: 'The unlucky prime',
        88: 'Miles per hour to go Back to the Future',
        89: 'All but one',
        90: 'Top of the house',
    }

    rand = () => {
        // console.log('rand')
        let x = Math.floor(Math.random() * 100) % 90 + 1;
        if (x < 10)
            x = '0' + x
        return x
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
                        <h1 className="display-3">{this.state.val}</h1>
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