function sum(a, b) {
  if (typeof a === 'undefined') {
    return 0;
  }

  if (typeof b === 'undefined') {
    return a + 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a === 'undefined') {
    return 0;
  }

  if (typeof b === 'undefined') {
    return a + 0;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    // figure out how to throw an error
    throw new Error();
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
