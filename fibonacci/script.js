const fibonacci = function (num) {
  let a = 0;
  let b = 1;
  let list = [0];
  for (let i = 1; i <= 1000; i++) {
    let result = b;
    list.push(result);
    result = a + b;
    a = b;
    b = result;
  }
  return list[num];
};
