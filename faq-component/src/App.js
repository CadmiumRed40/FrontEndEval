import './App.css';

function App() {

  state = {
    activeIndex: 0
  };

  handleItemClick = (index => {
    this.setState({ activeIndex: index });
  })

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
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ]

  const { activeIndex } = this.state;

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className='faqContainer'>
        <button onClick={() => this.handleItemClick(index)}>&#10146;</button>
        <ul>
          {FAQ.map((faqItem, index) => (
          <li key={index} className={index === 0 ? "active" : "inactive"}>
            <span>{faqItem.question}</span>
            <p>{faqItem.answer}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
