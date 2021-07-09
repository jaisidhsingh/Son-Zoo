import './App.css';
import React from 'react';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: "",
      data: null,
    }
  }
  
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({prompt: String(value+"\n\ntl;dr:")})
  }

  handleClick = () => {
    axios.post("/api",  {"prompt": this.state.prompt})
    .then(res => this.setState({data: res.data.message.choices[0].text}))
  }

  render() {
    return(
      <div class="App">
        <center>
        <h1>GPT-3 TL;DR</h1>
        <input type="text" placeholder="Prompt" onChange={this.handleChange}></input>
        <button type="submit" onClick={this.handleClick}>Submit</button>
        <h5>{!this.state.data ? "your tl;dr will appear here": this.state.data}</h5>
        </center>
      </div>
    );
  }
}


export default App;