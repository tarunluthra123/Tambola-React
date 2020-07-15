import React, {Component} from 'react';
import Square from "./Square";

class Board extends Component {
    render() {
        return (
            <div id="board">
                <div className="board-row row">
                    <Square value={1}/>
                    <Square value={2}/>
                    <Square value={3}/>
                    <Square value={4}/>
                    <Square value={5}/>
                    <Square value={6}/>
                    <Square value={7}/>
                    <Square value={8}/>
                    <Square value={9}/>
                    <Square value={10}/>
                </div>
                <div className="board-row row">
                    <Square value={11}/>
                    <Square value={12}/>
                    <Square value={13}/>
                    <Square value={14}/>
                    <Square value={15}/>
                    <Square value={16}/>
                    <Square value={17}/>
                    <Square value={18}/>
                    <Square value={19}/>
                    <Square value={20}/>
                </div>
                <div className="board-row row">
                    <Square value={21}/>
                    <Square value={22}/>
                    <Square value={23}/>
                    <Square value={24}/>
                    <Square value={25}/>
                    <Square value={26}/>
                    <Square value={27}/>
                    <Square value={28}/>
                    <Square value={29}/>
                    <Square value={30}/>
                </div>
                <div className="board-row row">
                    <Square value={31}/>
                    <Square value={32}/>
                    <Square value={33}/>
                    <Square value={34}/>
                    <Square value={35}/>
                    <Square value={36}/>
                    <Square value={37}/>
                    <Square value={38}/>
                    <Square value={39}/>
                    <Square value={40}/>
                </div>
                <div className="board-row row">
                    <Square value={41}/>
                    <Square value={42}/>
                    <Square value={43}/>
                    <Square value={44}/>
                    <Square value={45}/>
                    <Square value={46}/>
                    <Square value={47}/>
                    <Square value={48}/>
                    <Square value={49}/>
                    <Square value={50}/>
                </div>
                <div className="board-row row">
                    <Square value={51}/>
                    <Square value={52}/>
                    <Square value={53}/>
                    <Square value={54}/>
                    <Square value={55}/>
                    <Square value={56}/>
                    <Square value={57}/>
                    <Square value={58}/>
                    <Square value={59}/>
                    <Square value={60}/>
                </div>
                <div className="board-row row">
                    <Square value={61}/>
                    <Square value={62}/>
                    <Square value={63}/>
                    <Square value={64}/>
                    <Square value={65}/>
                    <Square value={66}/>
                    <Square value={67}/>
                    <Square value={68}/>
                    <Square value={69}/>
                    <Square value={70}/>
                </div>
                <div className="board-row row">
                    <Square value={71}/>
                    <Square value={72}/>
                    <Square value={73}/>
                    <Square value={74}/>
                    <Square value={75}/>
                    <Square value={76}/>
                    <Square value={77}/>
                    <Square value={78}/>
                    <Square value={79}/>
                    <Square value={80}/>
                </div>
                <div className="board-row row">
                    <Square value={81}/>
                    <Square value={82}/>
                    <Square value={83}/>
                    <Square value={84}/>
                    <Square value={85}/>
                    <Square value={86}/>
                    <Square value={87}/>
                    <Square value={88}/>
                    <Square value={89}/>
                    <Square value={90}/>
                </div>
            </div>
        );
    }
}

export default Board;