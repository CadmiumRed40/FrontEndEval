import './App.css';
import React, { Component } from 'react';

class App extends Component {
  handleClick(event) {
    const listItem = event.target.closest('li');
    listItem.classList.toggle('active');
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
              <li className='active'>
                  <button onClick={this.handleClick}>&#10146;</button>
                  <span>{FAQ[0].question}</span>
                  <p>{FAQ[0].answer}</p>
                </li>
            </div>

            <div className='itemContainer'>
              <button onClick={this.handleClick}>&#10146;</button>
              <li className='inactive'>
                <span>{FAQ[1].question}</span>
                <p>{FAQ[1].answer}</p>
              </li>
            </div>

           <div className='itemContainer'>
              <button onClick={this.handleClick}>&#10146;</button>
              <li className='inactive'>
                <span>{FAQ[2].question}</span>
                <p>{FAQ[2].answer}</p>
              </li>
            </div>
          
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
