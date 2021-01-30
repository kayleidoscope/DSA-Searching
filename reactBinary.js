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
  


  binarySearch(array, value, start, end, ticks = 1) {
    var s = start === undefined ? 0 : start;
    var e = end === undefined ? array.length : end;
    
    if (s > e) {
      return -1;
    }
    
    const index = Math.floor((s + e) / 2);
    let item = array[index];
    item = parseInt(item)
    
    // console.log(ticks, s, e);
    if (item == value) {
      return {result: index, ticks};
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, e, ticks + 1);
    }
    else if (item > value) {
        return this.binarySearch(array, value, s, index - 1, ticks + 1);
    }
  };

  handleSubmit = e => {
    e.preventDefault()
    let data = this.state.input
    let value = this.state.number
    let dataArray = data.split(", ")
    dataArray = dataArray.sort((a, b) => a - b);
    const result = this.binarySearch(dataArray, value, undefined, undefined)
    if (!result) {
      this.setState({
        tries: dataArray.length,
        sentence: " Your number was not found in this array."
      })
    } else {
      this.setState({
        tries: result.ticks,
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