import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    activeIndex: null
  };

  handleItemClick = (index) => {
    this.setState((state) => ({
      activeIndex: state.activeIndex === index ? null : index
    }));
  };

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

    const { activeIndex } = this.state;

    return (
      <div className="App">
        <h1>Frequently Asked Questions</h1>
        <div className='faqContainer'>
          <ul>
            {FAQ.map((faqItem, index) => (
              <li key={index} className={index === activeIndex ? "active" : "inactive"}>
                <span>{faqItem.question}</span>
                <button onClick={() => this.handleItemClick(index)}>&#10146;</button>
                {index === activeIndex && <p>{faqItem.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
