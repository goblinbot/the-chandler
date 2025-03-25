const romanizeNumber = (num) => {
  if (num === 0) {
    return 0;
  }

  // Disable eslint; this is a LET instead of const due to the odd loop below.
  // eslint-disable-next-line prefer-const
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};

// TODO: generic function for the "array of objects are the same???"

module.exports = {
  romanizeNumber,
};
