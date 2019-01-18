import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrainGame from './BrainGame'
import Placar from './Placar'


class App extends Component {
  state = {
  	numQuestions: 0,
    numCorrect: 0, 
  }

  handleChangePlacar = (anwser) => { 
    if(anwser){
    	 return this.setState(currentState => ({
          	numQuestions: currentState.numQuestions + 1,
           	numCorrect: currentState.numCorrect + 1
        }));
    }
    	return this.setState(currentState => ({
          	numQuestions: currentState.numQuestions + 1
        }));
  } 


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
         <BrainGame changePlacar={this.handleChangePlacar} />
		 <Placar numberQuestions={this.state.numQuestions} numberCorrect={this.state.numCorrect} />
      </div>
    );
  }
}

export default App;
