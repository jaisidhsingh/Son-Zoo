import './App.css';
import React from 'react';
import axios from 'axios'
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

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

  handleEvent = (event) => {
    let value = event.target.value;
    console.log(value)
  }

  render() {
    return(
      <div className="App">
        <center>
        <h1>
        A TL;DR generator
        </h1>
        <h5>with <span style={{color: 'darkorange'}}>GPT-3 </span> and <span style={{color: 'skyblue'}}>React</span></h5>
        <div className="form">
          <Form.Group controlId="formBasicPassword">
            <Form.Control  type="text" placeholder="Text"  onChange={this.handleChange}/>
          </Form.Group>
          </div>

          <Button variant ="light" size="lg" onClick={this.handleClick}>Submit</Button>{' '}

          <div className="result">
          <p style={{fontSize: 24}}>{!this.state.data ? "After submission, give us a couple of seconds, and your summary will appear here.": this.state.data}</p>
        </div>
        </center>
      </div>
    );
  }
}


export default App;