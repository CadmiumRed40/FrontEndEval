const calculateMonthlyPayment = (principal, interestRate, numberOfPayments) => {
    const monthlyPayment = principal * interestRate / (1 - Math.pow(1 + interestRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };
  
  const calculatePayment = () => {
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const numberOfPayments = parseFloat(document.getElementById("loanLength").value) * 12;
  
    const monthlyPayment = calculateMonthlyPayment(principle, interestRate, numberOfPayments);
  
    document.getElementById("result").innerText = `Your monthly mortgage payment will be $${monthlyPayment}`;
  };
  
  document.getElementById("calculateButton").addEventListener("click", calculatePayment);