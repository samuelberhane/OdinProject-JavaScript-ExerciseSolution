const leapYears = function (num) {
  if (num % 4 == 0) {
    if (num % 100 == 0) {
      if (num % 400 == 0) {
        leap = true;
      } else {
        leap = false;
      }
    } else {
      leap = true;
    }
  } else {
    leap = false;
  }
  return leap;
};
