const fibonacci = function(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
 // create an array and seed it with initial values
 const fibonacciSequence = [1, 1];
    for (let i = 2; num > fibonacciSequence.length; i++) {
    const onePrecedingNumber = fibonacciSequence[i - 1];
    const twoPrecedingNumber = fibonacciSequence[i - 2];
    const fibonacciNumber = onePrecedingNumber + twoPrecedingNumber;
    fibonacciSequence.push(fibonacciNumber);
  }
 const result = fibonacciSequence[num - 1];
 return result;
};

// Do not edit below this line
module.exports = fibonacci;
