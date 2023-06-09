import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick(index) {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  }

  render() {
    const FAQ = [
      {
        question: "How many bones does a cat have?",
        answer: "A cat has 230 bones - 6 more than a human",
      },
      {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
      },
      {
        question: "How long do cats live?",
        answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
      },
    ];



    return (
      <div className="App">
        <h1>Frequently Asked Questions</h1>
        <div className='faqContainer'>
          <ul>
            <div className='itemContainer'>
            <button onClick={() => this.handleClick(0)}>&#10146;</button>
              <li>
                  <span>{FAQ[0].question}</span>
                  <p className={this.state.activeIndex === 0 ? 'active' : 'inactive'}>{FAQ[0].answer}</p>
                </li>
            </div>

            <div className='itemContainer'>
              <button onClick={() => this.handleClick(1)}>&#10146;</button>
              <li>
                <span>{FAQ[1].question}</span>
                <p className={this.state.activeIndex === 1 ? 'active' : 'inactive'}>{FAQ[1].answer}</p>
              </li>
            </div>

           <div className='itemContainer'>
              <button onClick={() => this.handleClick(2)}>&#10146;</button>
              <li>
                <span>{FAQ[2].question}</span>
                <p className={this.state.activeIndex === 2 ? 'active' : 'inactive'}>{FAQ[2].answer}</p>
              </li>
            </div>
          
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
