const convertToCelsius = function(measurement) {
  const celsius = (measurement - 32) * (5/9);
  const result = Math.round(celsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function(measurement) {
  const fahrenheit = (measurement * (9/5) + 32);
  const result = Math.round(fahrenheit * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
