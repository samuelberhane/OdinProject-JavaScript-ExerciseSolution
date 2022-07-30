const add = function (a, b) {
  let result = a + b;
  return result;
};

const subtract = function (a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

const sum = function (arr) {
  let result = 0;
  for (let num of arr) {
    result += num;
  }
  return result;
};

const multiply = function (arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
};

const power = function (a, b) {
  let result = a ** b;
  return result;
};

const factorial = function (a) {
  let result = 1;
  if (a == 0) {
    return 1;
  } else {
    for (let i = a; i >= 1; i--) {
      result *= i;
    }
  }
  return result;
};
