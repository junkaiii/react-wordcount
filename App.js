import React from 'react';
import ReactDOM from 'react-dom';

const CHAR_LIMIT = 10;

class App extends React.Component{
  render(){
    return (
      <div>
      <WordCount />
      </div>
    )
  }
}

class WordCount extends React.Component{
  constructor(){
    super();
    this.state = {
      chars_left: CHAR_LIMIT,
      content: ""
    };
    this.type = this.type.bind(this);
  }

  type(event){
    let input = event.target.value;
    if(input.length > 10){
      input = input.substr(0, CHAR_LIMIT)
      console.log(input)
    }
    this.setState({
        chars_left: CHAR_LIMIT - input.length,
        content: input
    })
  }

  render(){
    return(
      <div>
        <textarea onChange={this.type} value={this.state.content}>{this.input}</textarea>
        <p>Characters Left: {this.state.chars_left}</p>
      </div>
    )
  }

}

export default App
