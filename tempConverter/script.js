const ftoc = function (f) {
  let celcius = (5 / 9) * (f - 32);
  let result = celcius.toFixed(1);
  if (celcius == 0) {
    result = 0;
  }
  return result;
};

const ctof = function (c) {
  let fahrenheit = (9 / 5) * c + 32;
  let result = fahrenheit.toFixed(1);
  if (fahrenheit == 0) {
    result = 0;
  }
  return result;
};
