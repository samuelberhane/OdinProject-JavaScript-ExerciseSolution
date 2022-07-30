const sumAll = function (num1, num2) {
  let result = 0;
  if (
    num1 < num2 &&
    num1 > 0 &&
    num2 > 0 &&
    typeof num1 == "number" &&
    typeof num2 == "number"
  ) {
    for (let i = num1; i <= num2; i++) {
      result += i;
    }
  } else if (
    num2 < num1 &&
    num1 > 0 &&
    num2 > 0 &&
    typeof num1 == "number" &&
    typeof num2 == "number"
  ) {
    for (let j = num2; j <= num1; j++) {
      result += j;
    }
  }
  return result;
};
