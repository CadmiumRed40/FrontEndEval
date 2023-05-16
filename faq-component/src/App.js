import './App.css';

function App() {

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

  return (
    <div className="App">
      <div className='faqContainer'>
        <ul>
          {FAQ.map((faqItem, index) => (
          <li> key={index}
            <span>{FAQ[0].question}</span>
            <p>{faqItem.answer}</p>
          </li>
        ))}
        </ul>
        </div>
    </div>
  );
}


export default App;
