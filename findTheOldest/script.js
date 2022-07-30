const findTheOldest = function (arr) {
  let newArr = [];
  for (item of arr) {
    if (!item.yearOfDeath) {
      age = 2022 - item.yearOfBirth;
      newArr.push([item.name, age]);
    } else {
      age = item.yearOfDeath - item.yearOfBirth;
      newArr.push([item.name, age]);
    }
  }
  let largest = 0;
  let oldest;
  for (let i = 0; i < newArr.length; i++) {
    if (largest == 0 || largest < newArr[i][1]) {
      largest = newArr[i][1];
      oldest = newArr[i][0];
    }
  }

  return oldest;
};
