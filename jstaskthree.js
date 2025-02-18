function multiply() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }
    
    const result = num1 * num2;
    document.getElementById('result').textContent = result;
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }
    
    if (num2 === 0) {
      alert('Cannot divide by zero');
      return;
    }
    
    const result = num1 / num2;
    document.getElementById('result').textContent = result;
  }