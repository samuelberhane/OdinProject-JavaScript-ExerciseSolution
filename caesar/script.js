const caesar = function (str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let lowerCaseStr = str.toLowerCase();
  let finalStr = "";
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentChar = lowerCaseStr[i];
    if (/[A-Za-z]/.test(currentChar) == false) {
      finalStr += currentChar;
    } else {
      let currentIndex = alphabet.indexOf(currentChar);
      let newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;
      if (str[i] == str[i].toUpperCase()) {
        finalStr += alphabet[newIndex].toUpperCase();
      } else {
        finalStr += alphabet[newIndex];
      }
    }
  }

  return finalStr;
};
