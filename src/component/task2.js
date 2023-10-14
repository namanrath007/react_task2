import React, { Component } from 'react';

// const bodyStyle = {
//     backgroundImage: 'linear-gradient(to right, rgb(0, 162, 255), rgb(0, 255, 38))'
//   };
  

const containerStyle = {
    margin: '80px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const downStyle = {
    backgroundColor: '#3a4452',
    padding: '20px',
    borderRadius: '10px',
  };
  
  const buttonStyle = {
    border: '0',
    outline: '0',
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    boxShadow: '-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)',
    background: 'transparent',
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
    margin: '10px',
  };
  
//   const display1Style = {
//     padding: '30px 0 30px 0',
//   };
  
const displayStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: '5px',
    margin: '0 0 0 12px',
    padding: '20px 0 20px 3px',
    width: '90%',
    height: '65px',
    fontSize: '25px',
    textAlign: 'right', 
  };
  ;

class Task2 extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value,
    }));
  };

  clearDisplay = () => {
    this.setState({ display: '' });
  };

  deleteLastCharacter = () => {
    this.setState((prevState) => ({
      display: prevState.display.slice(0, -1),
    }));
  };

  evaluateExpression = () => {
    try {
      this.setState({
        display: eval(this.state.display).toString(),
      });
    } catch (error) {
      this.setState({ display: 'Error' });
    }
  };

  render() {
    return (
        // <body style="{bodyStyle}">
      <div style={containerStyle}>
        <div id="down" style={downStyle}>
          <div id="display1">
            <input
              type="text"
              name="display"
              id="display"
              style={displayStyle}
              value={this.state.display}
            />
          </div>
          <div id="a0">
            <button style={buttonStyle} onClick={() => this.handleButtonClick('9')}>9</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('8')}>8</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('7')}>7</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('%')}>%</button>
          </div>
          <div id="a1">
            <button style={buttonStyle} onClick={() => this.handleButtonClick('6')}>6</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('5')}>5</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('4')}>4</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('*')}>x</button>
          </div>
          <div id="a2">
            <button style={buttonStyle} onClick={() => this.handleButtonClick('3')}>3</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('2')}>2</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('1')}>1</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('+')}>+</button>
          </div>
          <div id="a3">
            <button style={buttonStyle} onClick={() => this.handleButtonClick('0')}>0</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('.')}>.</button>
            <button style={buttonStyle} onClick={this.evaluateExpression}>=</button>
            <button style={buttonStyle} onClick={() => this.handleButtonClick('-')}>-</button>
          </div>
          <div id="a4">
            <button style={buttonStyle} onClick={() => this.handleButtonClick('00')}>00</button>
            <button style={buttonStyle} onClick={this.deleteLastCharacter}>DE</button>
            <button style={buttonStyle} onClick={this.clearDisplay}>AC</button>
          </div>
        </div>
      </div>
    //   </body>
    );
  }
}

export default Task2;
