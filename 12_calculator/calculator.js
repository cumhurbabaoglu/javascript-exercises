const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(...arr) {
  return arr.reduce((acc, num) => acc * num, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	 if (num === 0) {
            return 1;
        }
   if (num < 0) {
            throw new Error("Please enter a positive number");
        }
   let result = 1;
   for (let i=1; i <= num; i++) {
            result *= i;
        }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
