const removeFromArray = function (arr, ...arguments) {
  let argArr = [...arguments];
  let dic = {};
  let finalArray = [];
  for (let i of arr) {
    if (i in dic) {
      dic[i] += 1;
    } else {
      dic[i] = 1;
    }
  }
  for (let j of argArr) {
    if (j in dic) {
      delete dic[j];
    }
  }
  for (let value in dic) {
    finalArray.push(value);
  }

  return finalArray;
};
