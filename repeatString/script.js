const repeatString = function (string, num) {
  let result = "";
  while (num > 0) {
    result += string;
    num--;
  }
  return result;
};
