const palindromes = function (string) {
  let lowerString = string.toLowerCase();
  let list = [];
  let newList = [];
  let firstString = "";
  let finalString = "";
  for (let i = 0; i < lowerString.length; i++) {
    list.push(lowerString[i]);
  }
  for (let item of list) {
    if (item != " " && item != "," && item != "." && item != "!") {
      newList.push(item);
    }
  }
  for (let char of newList) {
    firstString += char;
  }
  for (let j = firstString.length - 1; j >= 0; j--) {
    finalString += firstString[j];
  }
  if (finalString == firstString) {
    return true;
  } else {
    return false;
  }
};
