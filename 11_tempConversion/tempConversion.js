const convertToCelsius = function(measurement) {
  const celsius = (measurement - 32) * (5/9);
  const result = Math.round(celsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
