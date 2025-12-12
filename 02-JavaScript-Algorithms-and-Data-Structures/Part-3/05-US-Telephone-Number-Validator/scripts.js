document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  function telephoneCheck(str) {
    // Regular expression to match valid US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(str);
  }

  checkBtn.addEventListener('click', function () {
    const input = userInput.value.trim();

    if (!input) {
      alert('Please provide a phone number');
      return;
    }

    const isValid = telephoneCheck(input);
    const resultElement = document.createElement('p');
    resultElement.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
    resultElement.className = isValid ? 'valid' : 'invalid';

    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(resultElement);
  });

  clearBtn.addEventListener('click', function () {
    resultsDiv.innerHTML = '';
    userInput.value = '';
  });

  // Allow pressing Enter key to trigger check
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkBtn.click();
    }
  });
});