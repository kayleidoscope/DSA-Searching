//I feel like this won't work here because I haven't made this a React app, but I made it work on
//my React playground (and it does work), and here is that code
import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      number: null,
      sentence: "",
      tries: 0
    }
  }

  indexOf(array, value) {
    let tries = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
          tries = i + 1
            return tries;
        }
    }
    return -1;
};

  handleSubmit = e => {
    e.preventDefault()
    let data = this.state.input
    let value = this.state.number
    const dataArray = data.split(", ")
    const tries = this.indexOf(dataArray, value)
    if (tries === -1) {
      this.setState({
        tries: dataArray.length,
        sentence: " Your number was not found in this array."
      })
    } else {
      this.setState({
        tries,
        sentence: ""
      })

    }
  }

  handleInputChange = (input) => {
    this.setState({
      input
    })
  }

  handleNumChange = (number) => {
    this.setState({
      number
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Input a series of numbers separated by commas</h1>
        <form onSubmit = {this.handleSubmit}>
          <textarea onChange = {e => this.handleInputChange(e.target.value)}/>
          <input type="number" onChange = {e => this.handleNumChange(e.target.value)} />
          <input type="submit" />
        </form>
        <p>It took {this.state.tries} searches to find your number.{this.state.sentence}</p>
      </div>
    );
  }
}

export default App;