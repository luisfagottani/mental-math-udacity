import React, { Component } from 'react';
import Button from './Button'

class BrainGame extends Component {
  constructor(props){
    super(props);
    const gamingData = this.gameData();
    this.state = {
      value1: gamingData[0],
      value2: gamingData[1], 
      value3: gamingData[2],
      proposedAnswer: gamingData[3]
    }
  }
    
  gameData = () => {
    const value1 = Math.floor(Math.random() * 100);
	const value2 =  Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3
   	return  [
    	value1,
        value2,
        value3,
        proposedAnswer
    ]
  }

  updatePergunta = () => {
  	const data = this.gameData();
    this.setState(() => ({
      value1: data[0],
      value2: data[1], 
      value3: data[2],
      proposedAnswer: data[3]
    }));
  }
   
  verifyQuestions = (anwser) => { 
    const {value1, value2, value3, proposedAnswer} = this.state;
  	const total = value1 + value2 + value3;
    const pressumed = proposedAnswer;
    if((total === pressumed && anwser) || (total !== pressumed && !anwser)){
    	this.props.changePlacar(true)
    }else{
    	this.props.changePlacar(false)
    }
    return this.updatePergunta();
  } 

 render() {
	const {value1, value2, value3, proposedAnswer} = this.state;
    return (
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <Button clickEvent={this.verifyQuestions} trueOrFalse={false}>False</Button>
          <Button clickEvent={this.verifyQuestions} trueOrFalse={true}>True</Button>
        </div>
    );
  }
}

export default BrainGame;